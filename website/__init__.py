from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import path 
from flask_login import LoginManager 

db = SQLAlchemy()
DB_NAME = "database.db"

def create_app():
    app = Flask(__name__)
    app.config["SECRET_KEY"] = "rehaan"
    app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{DB_NAME}" 
    db.init_app(app) 

    # Import the blueprints:
    from .views import views
    
    with app.app_context():
        db.create_all()

    # Register the blueprints:
    app.register_blueprint(views, url_prefix="/")

    return app
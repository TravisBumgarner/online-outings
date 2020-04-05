"""
Django settings for server project.

Generated by 'django-admin startproject' using Django 3.0.4.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.0/ref/settings/
"""

import os

from server import config

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SECRET_KEY = config.SECRET_KEY

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "rest_framework",
    "api",
    "corsheaders",
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "server.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "server.wsgi.application"

if os.getenv("IS_CLOUD_RUN", None):
    CORS_ORIGIN_WHITELIST = ["https://onlineoutings.com"]
    DEBUG = config.DEBUG
    ALLOWED_HOSTS = config.ALLOWED_HOSTS
    DATABASES = {
        "default": {
            # If you are using Cloud SQL for MySQL rather than PostgreSQL, set
            # 'ENGINE': 'django.db.backends.mysql' instead of the following.
            "ENGINE": "django.db.backends.postgresql_psycopg2",
            "NAME": config.POSTGRES_DATABASE,
            "USER": config.POSTGRES_USER,
            "PASSWORD": config.POSTGRES_PASSWORD,
            "HOST": config.POSTGRES_HOST,
            "PORT": "5432",
        },
    }
else:
    CORS_ORIGIN_WHITELIST = ["http://localhost:3000", "https://onlineoutings.com"]
    DEBUG = True
    ALLOWED_HOSTS = ["*"]
    # First database is for local postgres, second is for conencting via cloud_sql_proxy to GCP
    DATABASES = {
        # "default": {
        #     "ENGINE": "django.db.backends.postgresql",
        #     "NAME": "online_outings",
        #     "USER": "postgres",
        #     "PASSWORD": "docker",
        #     "HOST": "127.0.0.1",
        #     "PORT": "5432",
        # },
        "default": {
            "ENGINE": "django.db.backends.postgresql_psycopg2",
            "NAME": config.POSTGRES_DATABASE,
            "USER": config.POSTGRES_USER,
            "PASSWORD": config.POSTGRES_PASSWORD,
            "HOST": "127.0.0.1",
            "PORT": "5432",
        }
    }


# Password validation
# https://docs.djangoproject.com/en/3.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",},
]


# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

# STATIC_URL = "/static/"
STATIC_URL = "https://storage.googleapis.com/online-outings/static/"
STATIC_ROOT = "static/"

REST_FRAMEWORK = {
    "DEFAULT_PAGINATION_CLASS": "rest_framework.pagination.PageNumberPagination",
    "PAGE_SIZE": 10,
}

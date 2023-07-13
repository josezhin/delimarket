# Backend

## Requisitos previos

Asegúrate de tener instalado lo siguiente en tu máquina:

- Python: [Descargar aquí](https://www.python.org/ftp/python/3.11.3/python-3.11.3-amd64.exe)
- Visual Studio Code: [Descargar aquí](https://code.visualstudio.com/)

## Configuración

Sigue los pasos a continuación para configurar el proyecto en tu entorno local.

1. Clona el repositorio:

   ```bash
   git clone https://github.com/CarlosHernandez200/delimark
   
2. Navega hasta la carpeta del proyecto:

   ```bash
   cd delimark/backend
   
## Crear un entorno virtual

- Ejecuta el siguiente comando según tu sistema operativo:

    - Linux: `python -m venv venv` y luego `source venv/bin/activate`
    - Windows: `python -m venv venv` y luego `venv\Scripts\Activate.ps1`

## Instalar los requisitos

Ejecuta el siguiente comando para instalar las dependencias necesarias:

    pip install -r requirements.txt

## Migraciones

Ejecuta los siguientes comandos para realizar las migraciones del proyecto:

    python manage.py makemigrations
    python manage.py migrate
    
## Iniciar el servidor

Para iniciar el servidor, ejecuta el siguiente comando:

    python manage.py runserver

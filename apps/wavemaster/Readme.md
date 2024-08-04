# WaveMaster

WaveMaster is a small Express server application that utilizes the Audiowaveform library to generate JSON representations of audiowaveforms from audio files. This application is designed to run in a Docker container.

## Prerequisites

Before running WaveMaster, make sure you have the following installed:

- Docker

## Installation

1. Clone the repository:

2. Build the Docker image:

3. Run the Docker container:

## Usage

Once the WaveMaster server is up and running, it will listen for new updates in the queue. When a new video is set to be processed, the server will download the video, run the client application, and save the generated JSON directly in the database. This JSON can then be used by the frontend.

## Configuration

WaveMaster can be configured by modifying the `config.js` file. You can specify the queue directory, the location to save the downloaded videos, and other settings according to your requirements.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. 

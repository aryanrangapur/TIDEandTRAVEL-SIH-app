<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coastal Safety App</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            width: 80%;
            margin: auto;
            overflow: hidden;
        }
        header {
            background: #0288D1;
            color: #fff;
            padding-top: 30px;
            min-height: 70px;
            border-bottom: #fff 3px solid;
            text-align: center;
        }
        header h1 {
            margin: 0;
            font-size: 2.5em;
        }
        .content {
            padding: 20px;
            background: #fff;
            border-radius: 5px;
            margin: 20px 0;
        }
        h2 {
            color: #0288D1;
        }
        code {
            background: #e7e7e7;
            padding: 2px 5px;
            border-radius: 3px;
        }
    </style>
</head>
<body>
    <header>
        <h1>Coastal Safety App</h1>
    </header>

    <div class="container">
        <div class="content">
            <h2>Overview</h2>
            <p>The Coastal Safety App is a React Native application designed to ensure tourist safety during coastal recreational activities by providing real-time insights into beach conditions across India.</p>

            <h2>Features</h2>
            <ul>
                <li>Monitor beach safety parameters including ocean alerts, meteorological data, and water quality.</li>
                <li>Provide real-time safety recommendations for beaches.</li>
                <li>Display geospatial maps showing beach safety levels.</li>
                <li>Alert users based on their location with real-time risk notifications.</li>
            </ul>

            <h2>Tech Stack</h2>
            <p>React Native, react-native-vector-icons, react-navigation, INCOIS API</p>

            <h2>Getting Started</h2>
            <p>Clone the repository and install dependencies:</p>
            <code>git clone https://github.com/your-username/your-repo.git</code><br>
            <code>cd your-repo</code><br>
            <code>npm install</code><br>
            <p>Run the application:</p>
            <code>npx react-native run-android</code><br>
            <code>npx react-native run-ios</code>

            <h2>Contributing</h2>
            <p>Contributions are welcome! Open issues or submit pull requests to improve the project.</p>
        </div>
    </div>
</body>
</html>

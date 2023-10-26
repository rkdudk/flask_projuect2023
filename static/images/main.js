<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
    <script src="{{ url_for('static', filename='main.js') }}" defer></script>
</head>
<body>
    <nav class="navbar">
        <div class="navbar__logo">
            <a href="">EwhaMarket</a>
        </div>
        <ul class="navbar__menu">
            <li><a href="">List</a></li>
            <li><a href="">Review</a></li>
            <li><a href="">Register Items</a></li>
            <li><a href="">Register Reviews</a></li>
        </ul>
    </nav>
</body>
</html>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>REGISTER</title>
</head>

<body>
    <form action="{{route('register')}}" method="post">
        @csrf
        <input type="text" name="name" id="">
        <input type="email" name="email" id="">
        <input type="password" name="password" id="">
        <button type="submit">ADD</button>
    </form>
</body>

</html>
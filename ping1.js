var retVal = prompt("Enter any number : ", "your number here");

for (var x=1; x <= retVal; x++) {var skip = 0;
    if (x % 3 == 0) {
        document.write('ping');
        skip = 1;
    }
    if (x % 5 == 0) {
        document.write('pong');
        skip = 1;
    }
    if (!skip) {
        document.write(x);
    }
    document.write('<br>');
}
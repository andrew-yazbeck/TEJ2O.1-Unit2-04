/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Andrew
 * Created on: Sep 2025
 * This program finds the temperature
*/

basic.forever(function () {
    let tempC = input.temperature();
    basic.showNumber(tempC);
    basic.pause(1000);
})
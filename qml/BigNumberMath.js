.import "BigNumber.js" as BigNumberJs;
//.import "MathJs.js" as MathJs;
var runTest = 1;        // 0=False, 1=True
var debugBigNumber = true; // 0=false, 1=true
var debugMessage = 0;   // 0=False, 1=True
var makeDecimal = 0;    // 0=false, 1=true
/* **********************************************************
 * isInArray
 */
function isInArray(thisItem, thisArray) {
    return thisArray.indexOf(thisItem.toLowerCase()) > -1;
}
/* **********************************************************
 * parse
 * 3 + 2 - 1 * 4 / 6 * ( 7 / 8 )
parse(1 + 1,0)
parse(3 - 1,0)
parse(1 * 2,0)
parse(4 / 2,0)
test Finished
parse(1 + 1,0)
BigNumber plus Error: Error: [BigNumber Error] Argument not a primitive number: 0
file:GalaxyCalculator//qml/BigNumber.js:2842: Error: [BigNumber Error] Argument not a primitive number: 0

 */
function parse(thisEquation, sDecimalPlaces) {
    sDecimalPlaces = sDecimalPlaces * 1;
    console.debug("parse(" + thisEquation + "," + sDecimalPlaces + ")")
    if (debugBigNumber) BigNumber.DEBUG = true;
    let fThis = thisEquation + "";
    let mathOperators = ["+", "-", "*", "/", "%", "(", ")"];
    let words = fThis.split(" ");
    let i = 0;
    let lastOperation = "";
    let theOperant = "";
    let theNumber = "";
    let theResult = "";
    let brackets = 0; // 0=No, 1=Start, 2=End
    for (i = 0; i < words.length; i++) {
        //console.debug("words[" + i + "]=|" + words[i] + "|");
        if (isInArray(words[i], mathOperators))  {
            //console.debug("isInArray math=|" + words[i] + "|");
            theOperant = words[i];
            lastOperation = "math";
            if (words[i] === "(") {
                brackets = 1;
            } else if (words[i] === ")") {
                brackets = 2;
            }
        } else {
            //console.debug("brackets=|" + brackets + "|");
            if (brackets === 0) {
                if (lastOperation === "math") {
                    //console.debug("lastOperation math=|" + theOperant + "|");
                    if (theOperant === "+") {
                        //console.debug("lastOperation=" + lastOperation + " theOperant=" + theOperant + " theNumber=" + theNumber + " ");
                        theResult = plus(theNumber, words[i], sDecimalPlaces);
                    } else if (theOperant === "-") {
                        theResult = minus(theNumber, words[i], sDecimalPlaces);
                    } else if (theOperant === "*") {
                        theResult = times(theNumber, words[i], sDecimalPlaces);
                    } else if (theOperant === "/") {
                        theResult = dividedBy(theNumber, words[i], sDecimalPlaces);
                    } else if (theOperant === "%") {
                        //theResult = plus(theNumber, words[i], sDecimalPlaces);
                    }
                } else {
                    // console.debug("number=|" + words[i] + "|");
                    theNumber = words[i];
                    lastOperation = "number";
                } // end if (lastOperation === "")
            } else if (brackets === 1) {

            } else if (brackets === 2) {

            } else {
                theNumber = words[i];
                lastOperation = "number";
            }
        }
    } // end for
    theResult = fixNumber(theResult);
    return theResult;
} // end parse
/* **********************************************************
 *
 */
function pI(sDecimalPlaces) {

}
/* **********************************************************
 * test all functions

test Started
BigNumber a + b= [1.0] + [1.0]
BigNumber a + b= [1.0] + [1.0] = 2
test Failed: parse(1 + 1, 0) = |2.0| expected: 2 or 2.0 depending on decimal places
BigNumber a * b= 1.0 * 2.0 = 2 formated: 2
test Failed: parse(1 * 2, 0) = |2.0| expected: 2 or 2.0 depending on decimal places
BigNumber a / b= 4.0 / 2.0 = 2 formated: 2
test Failed: parse(4 / 2, 0) = |2.0| expected: 2 or 2.0 depending on decimal places
BigNumber a - b= 3.0 - 1.0 = 2
test Failed: parse(3 - 1, 0) = |2.0| expected: 2 or 2.0 depending on decimal places
test Finished

*/
function test() {
    if (debugBigNumber) BigNumber.DEBUG = true;
    console.debug("test Started");
    let storageVar = "";
    let thisTestString = "1234.6789";
    storageVar = fixNumber(thisTestString);
    if (storageVar !== thisTestString) {
        console.debug("test Failed: fixNumber(" + thisTestString + ") = |" + storageVar + "|")
    }
    thisTestString = "100000.000000";
    storageVar = fixNumber(thisTestString);
    if (storageVar === thisTestString) {
        console.debug("test Failed: fixNumber(" + thisTestString + ") = |" + storageVar + "| expected: 100000.0 or 100000")
    }
    // Test Math Parser plus
    storageVar = parse("1 + 1", 0);
    if (storageVar.indexOf(".") > 0) {
        if (storageVar !== "2.0") {
            console.debug("test Failed: parse(1 + 1, 0) = |" + storageVar + "| expected: 2.0")
        }
    } else {
        if (storageVar !== "2") {
            console.debug("test Failed: parse(1 + 1, 0) = |" + storageVar + "| expected: 2")
        }
    }
    // Test Math Parser minus
    storageVar = parse("3 - 1", 0);
    if (storageVar.indexOf(".") > 0) {
        if (storageVar !== "2.0") {
            console.debug("test Failed: parse(3 - 1, 0) = |" + storageVar + "| expected: 2.0")
        }
    } else {
        if (storageVar !== "2") {
            console.debug("test Failed: parse(3 - 1, 0) = |" + storageVar + "| expected: 2")
        }
    }
    // Test Math Parser times
    storageVar = parse("1 * 2", 0);
    if (storageVar.indexOf(".") > 0) {
        if (storageVar !== "2.0") {
            console.debug("test Failed: parse(1 * 2, 0) = |" + storageVar + "| expected: 2.0")
        }
    } else {
        if (storageVar !== "2") {
            console.debug("test Failed: parse(1 * 2, 0) = |" + storageVar + "| expected: 2")
        }
    }
    // Test Math Parser divide
    storageVar = parse("4 / 2", 0);
    if (storageVar.indexOf(".") > 0) {
        if (storageVar !== "2.0") {
            console.debug("test Failed: parse(4 / 2, 0) = |" + storageVar + "| expected: 2.0")
        }
    } else {
        if (storageVar !== "2") {
            console.debug("test Failed: parse(4 / 2, 0) = |" + storageVar + "| expected: 2")
        }
    }


    console.debug("test Finished");
}
/* **********************************************************
 * modInverse
 */
function modInverseJs(thisNumber, thisMod) {
    let thatNumber = thisNumber % thisMod;
    let x = 0;
    for (x = 1; x < thisMod; x++) {
       if ((thatNumber * x) % thisMod === 1) {
          return x;
       }
    }
    // should never get here
    return thisNumber;
}
/* **********************************************************
 * modInverseBn
 */
function modInverse(thisNumber, thisMod) {
    if (debugBigNumber) BigNumber.DEBUG = true;
    let thatNumber = new BigNumberJs.BigNumber(thisNumber);
    thatNumber = thatNumber.modulo(thisMod);
    let x = 0;
    for (x = 1; x < thisMod; x++) {
       if (thatNumber.times(x).modulo(thisMod).toString() === "1") {
          return x;
       }
    }
    // should never get here
    return thisNumber;
}
/* **********************************************************
 * squareRoot
 */
function squareRoot(sThis, sDecimalPlaces) {
    if (debugBigNumber) BigNumber.DEBUG = true;
    BigNumber.config({ EXPONENTIAL_AT: 1e+9 });
    let fThis = sThis + "";
    fThis = fixNumber(fThis);
    if (fThat === "0.0") {
        console.debug("dividedByBn error (" + fThis + ", " + fThat + ", " + sDecimalPlaces + ")")
        return "0.0";
    }
    if (fThis === "0.0") {
        return "0.0";
    }
    let bnThis = new BigNumberJs.BigNumber(fThis);
    let sqrValue = 0
    try {
        sqrValue = bnThis.squareRoot();
    } catch (e) {
        if (e instanceof Error && e.message.indexOf('[BigNumber Error]') === 0) {
            console.debug("BigNumber squareRoot Error: " + e);
        }
    }
    if (debugMessage === 1)
        console.debug("BigNumber a / b= " + fThis + " / " + fThat + " = " + result.toString() + " formated: " + result.decimalPlaces(sDecimalPlaces).toFixed(sDecimalPlaces));
    return sqrValue;
}
/* **********************************************************
 * sqrt
 */
function sqrt(sThis, sDecimalPlaces) {
    if (debugBigNumber) BigNumber.DEBUG = true;
    BigNumber.config({ EXPONENTIAL_AT: 1e+9 });
    let fThis = sThis + "";
    fThis = fixNumber(fThis);
    if (fThat === "0.0") {
        console.debug("dividedByBn error (" + fThis + ", " + fThat + ", " + sDecimalPlaces + ")")
        return "0.0";
    }
    if (fThis === "0.0") {
        return "0.0";
    }
    let bnThis = new BigNumberJs.BigNumber(fThis);
    let sqrValue = 0
    try {
        sqrValue = bnThis.sqrt();
    } catch (e) {
        if (e instanceof Error && e.message.indexOf('[BigNumber Error]') === 0) {
            console.debug("BigNumber sqrt Error: " + e);
        }
    }
    if (debugMessage === 1)
        console.debug("BigNumber a / b= " + fThis + " / " + fThat + " = " + result.toString() + " formated: " + result.decimalPlaces(sDecimalPlaces).toFixed(sDecimalPlaces));
    return sqrValue;
}
/* **********************************************************
 * dividedBy
 */
function dividedBy(sThis, sThat, sDecimalPlaces) {
    if (debugBigNumber) BigNumber.DEBUG = true;
    BigNumber.config({ EXPONENTIAL_AT: 1e+9 });
    let fThis = sThis + "";
    let fThat = sThat + "";
    fThis = fixNumber(fThis);
    fThat = fixNumber(fThat);

    if (fThat === "0.0") {
        console.debug("dividedByBn error (" + fThis + ", " + fThat + ", " + sDecimalPlaces + ")")
        return "0.0";
    }
    if (fThis === "0.0") {
        return "0.0";
    }

    let bnThis = new BigNumberJs.BigNumber(fThis);
    let bnThat = new BigNumberJs.BigNumber(fThat);
    let result = 0;
    try {
        result = bnThis.dividedBy(bnThat);
    } catch (e) {
        if (e instanceof Error && e.message.indexOf('[BigNumber Error]') === 0) {
            console.debug("BigNumber dividedBy Error: " + e);
        }
    }
    if (debugMessage === 1)
        console.debug("BigNumber a / b= " + fThis + " / " + fThat + " = " + result.toString() + " formated: " + result.decimalPlaces(sDecimalPlaces).toFixed(sDecimalPlaces));
    return result.decimalPlaces(sDecimalPlaces).toFixed(sDecimalPlaces);
}
/* **********************************************************
 * times
 */
function times(sThis, sThat, sDecimalPlaces) {
    if (debugBigNumber) BigNumber.DEBUG = true;
    BigNumber.config({ EXPONENTIAL_AT: 1e+9 });
    let fThis = sThis + "";
    let fThat = sThat + "";
    fThis = fixNumber(fThis);
    fThat = fixNumber(fThat);
    let bnThis = new BigNumberJs.BigNumber(fThis);
    let bnThat = new BigNumberJs.BigNumber(fThat);

    let result = 0;
    try {
        result = new BigNumber(bnThis.times(bnThat))
    } catch (e) {
        if (e instanceof Error && e.message.indexOf('[BigNumber Error]') === 0) {
            console.debug("BigNumber times Error: " + e);
        }
    }
    if (debugMessage === 1)
        console.debug("BigNumber a * b= " + fThis + " * " + fThat + " = " + result.toString() + " formated: " + result.decimalPlaces(sDecimalPlaces).toFixed(sDecimalPlaces));
    return result.decimalPlaces(sDecimalPlaces).toFixed(sDecimalPlaces);
}
/* **********************************************************
 * plus
 */
function plus(sThis, sThat, sDecimalPlaces) {
    if (debugBigNumber) BigNumber.DEBUG = true;
    BigNumber.config({ EXPONENTIAL_AT: 1e+9 });
    let result = 0;
    let fThis = sThis + "";
    let fThat = sThat + "";
    fThis = fixNumber(fThis);
    fThat = fixNumber(fThat);
    if (debugMessage === 1)
        console.debug("BigNumber a + b= [" + fThis + "] + [" + fThat + "]");

    let bnThis = new BigNumberJs.BigNumber(fThis);
    let bnThat = new BigNumberJs.BigNumber(fThat);
    try {
        result = bnThis.plus(bnThat);
    } catch (e) {
        if (e instanceof Error && e.message.indexOf('[BigNumber Error]') === 0) {
            console.debug("BigNumber plus Error: " + e);
        }
    }
    if (debugMessage === 1)
        console.debug("BigNumber a + b= [" + fThis + "] + [" + fThat + "] = " + result.decimalPlaces(sDecimalPlaces).toFixed(sDecimalPlaces));
    return result.decimalPlaces(sDecimalPlaces).toFixed(sDecimalPlaces);
}
/* **********************************************************
 * minus
 */
function minus(sThis, sThat, sDecimalPlaces) {
    if (debugBigNumber) BigNumber.DEBUG = true;
    BigNumber.config({ EXPONENTIAL_AT: 1e+9 });
    let fThis = sThis + "";
    let fThat = sThat + "";
    fThis = fixNumber(fThis);
    fThat = fixNumber(fThat);
    let bnThis = new BigNumberJs.BigNumber(fThis);
    let bnThat = new BigNumberJs.BigNumber(fThat);
    let result = 0;
    try {
        result = bnThis.minus(bnThat);
    } catch (e) {
        if (e instanceof Error && e.message.indexOf('[BigNumber Error]') === 0) {
            console.debug("BigNumber minus Error: " + e);
        }
    }
    if (debugMessage === 1)
        console.debug("BigNumber a - b= " + fThis + " - " + fThat + " = " + result.toString());
    return result.decimalPlaces(sDecimalPlaces).toFixed(sDecimalPlaces);
}
/* **********************************************************
 * fixNumber("0.00000") = "0.0"
 * 100000 = 100000
 * 1234.5678 = 1234.5678
 * 100000.000000 = 100000.0 or 100000
 *
    BigNumber a + b= [1.0] + [1.0]
    BigNumber a + b= [1.0] + [1.0]
 */
function fixNumber(sThis) {
    let fThis = sThis + "";
    // if not a float return
    if (fThis.indexOf(".") < 1) return fThis + ".0";
    let newThis = "";
    let returnThis = "";
    let isPositive = 0;
    let i = 0;
    let signThis = "";
    if (fThis.charAt(0) === '-') signThis = "-";
    // reverse the numbers to rid 0 as last decimal
    for (i = fThis.length - 1; i > -1; i--) {
        //
        if (fThis.charAt(i) !== '-' && fThis.charAt(i) !== '+') {
            if (fThis.charAt(i) !== '0') {
                isPositive = 1;
            }
            if (isPositive === 1) {
                newThis = newThis + fThis.charAt(i);
            }
        } // end if
    } // end for
    // reverse the numbers
    for (i = newThis.length - 1; i > -1; i--) {
        returnThis = returnThis + newThis.charAt(i);
    } // end for
    if (returnThis.charAt(returnThis.length - 1) === ".") {
        if (makeDecimal === 0){
            returnThis = returnThis + "0";
        } else {
            returnThis = returnThis.substring(0, returnThis.length - 1);
        }
    } // end if .
    return signThis + returnThis;
} // end fixNumber
/* **********************************************************
 * format
 */
function format(sThis, sDecimalPlaces) {
    if (debugBigNumber) BigNumber.DEBUG = true;
    BigNumber.config({ EXPONENTIAL_AT: 1e+9 });
    let fThis = sThis + "";
    fThis = fixNumber(fThis);
    if (fThis === "0.0") return "0.0";
    if (fThis === "0") return "0";
    //console.debug("formatBn fThis=" + fThis)
    let y = new BigNumberJs.BigNumber(fThis);
    return y.toFormat(sDecimalPlaces);  // "1,234,567.90"
}
/* **********************************************************
 * abs
 */
function abs(sThis) {
    let fThis = sThis + "";
    fThis = fixNumber(fThis);
    if (fThis === "0.0" || fThis === "-0.0") return "0.0";
    if (fThis.charAt(0) === "-" || fThis.charAt(0) === "+") return fThis.substring(1, fThis.length);
    return fThis;
}

if (runTest === 1) test();
/* ***************************** End of File ******************************* */

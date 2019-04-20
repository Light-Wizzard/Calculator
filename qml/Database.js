.import QtQuick.LocalStorage 2.0 as Storage
//.import "Common.js" as Js
/* ****************************************************************************
 * Database.js
 * Written by Jeffrey Scott Flesher
 *
 * This Application will build a Website Based on a Book,
 * Every Book is in its own book Table:
 *      rowid: used as Book ID
 *      title
 *      description
 *      keywords
 *      meta
 *      footer: scripts
 *      includes: javascript, css
 *      author
 *      isbn
 *      copyright_holder
 *      copyright_date
 *      publisher
 *      synopsis
 *      country_restrictions
 *      license
 *      genre
 *      comments
 *      languageid
 *      lastupdate
 *
 * Every Chapter is tied to a Book ID, chapter table
 *      rowid: used as Book ID
 *      bookid: rowid of book table
 *      title
 *      description
 *      keywords
 *      meta
 *      comments
 *      languageid
 *      includes: javascript, css
 *      lastupdate
 *
 * Every Subchapter is tied to a Chapter, subchapter table
 *      rowid: used as Book ID
 *      bookid: rowid of book table
 *      chapterid: rowid of chapter table
 *      title
 *      description
 *      keywords
 *      meta
 *      comments
 *      languageid
 *      includes: javascript, css
 *      lastupdate
 *
 * Every Paragraph is tied to a chapter or subchapter table
 *      rowid: used as Book ID
 *      bookid: rowid of book table
 *      chapterid: rowid of chapter table
 *      subchapterid: rowid of subchapter table
 *      id
 *      class
 *      style
 *      title
 *      content
 *      markup
 *      languageid
 *      comments
 *      lastupdate
 *
 * Inside of every Paragraph can be custom controls,
 * each control has a name that corrisponds to an HTML control
 *
 * The test function uses a database to store the web page information,
 *
 *      rowid: used as WebPageMaker command return text
 *      title
 *      content
 *      languageid
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
/* ****************************************************************************
 * get set DbName
 */
var DbName = "Calculator";
function getDbName() {
    return DbName;
}
function setDbName(dbName) {
    DbName = dbName;
}
/* ****************************************************************************
 * get set DbDescription
 */
var DbDescription = "Webook Calculator";
function getDbDescription() {
    return DbDescription;
}
function setDbDescription(dbDescription) {
    DbDescription = dbDescription;
}
/* ****************************************************************************
 * get set DbVersion
 */
var DbVersion = "1.0";
function getDbVersion() {
    return DbVersion;
}
function setDbVersion(dbVersion) {
    DbVersion = dbVersion;
}
/* ****************************************************************************
 * get set RecordNumber
 * Default:
 */
var RecordNumber = "";
function getRecordNumber() {
    return RecordNumber;
}
function setRecordNumber(recordNumber) {
    RecordNumber = recordNumber;
}
/* ****************************************************************************
 * set Defaults
 */
function setConfiguration(textEditGalaxy, textEditSunSize, textEditLivalbePlanetSize, textEditTrinaryEngines, textEditGalaxyRadius, textEditPrintNthTrack, recordNumber) {
    setTextEditGalaxy(textEditGalaxy)
    setTextEditSunSize(textEditSunSize);
    setTextEditLivalbePlanetSize(textEditLivalbePlanetSize);
    setTextEditTrinaryEngines(textEditTrinaryEngines);
    setTextEditGalaxyRadius(textEditGalaxyRadius);
    setTextEditPrintNthTrack(textEditPrintNthTrack);
    setRecordNumber(recordNumber);
}
/* ****************************************************************************
 * setConfig
 */
function setConfig(galaxy,sunSize,livalbePlanetSize,trinaryEngines,galaxyRadius,printNthTrack) {
    setGalaxy(galaxy);
    setSunSize(sunSize);
    setLivalbePlanetSize(livalbePlanetSize);
    setTrinaryEngines(trinaryEngines);
    setGalaxyRadius(galaxyRadius);
    setPrintNthTrack(printNthTrack);
}
/* ****************************************************************************
 * dbInit
 */
function dbInitCalculator() {
    var db = Storage.LocalStorage.openDatabaseSync(getDbName(), getDbVersion(), getDbDescription(), 1000000);
    // Create the database if it doesn't already exist
    try {
        db.transaction(function (tx) {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS book ([rowid] INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,[title] TEXT,[author] TEXT,[isbn] TEXT),[copyright_holder] TEXT,[copyright_date] TEXT,[publisher] TEXT,[synopsis] TEXT,[country_restrictions] TEXT,[license] TEXT,[genre] TEXT,[comments] TEXT)');
        });
    } catch (err) {
        console.log("Error creating table in database: " + err);
    }
    try {
        db.transaction(function (tx) {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS calculator ([rowid] INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,[book] TEXT,[sunSize] TEXT,[livalbePlanetSize] TEXT)');
        });
    } catch (err) {
        console.log("Error creating table in database: " + err);
    }
    // Create the database if it doesn't already exist
    try {
        db.transaction(function (tx) {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS galaxyTracks ([rowid] INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,[currentTrackNumber] TEXT,[trackEngines] TEXT,[maxSpeed] TEXT,[minSpeed] TEXT,[lpFrequency] TEXT,[orbitDist] TEXT,[trackFreq] TEXT)');
        });
    } catch (err) {
        console.log("Error creating table in database: " + err);
    }
}
/* ****************************************************************************
 * dbGetHandle
 */
function dbGetHandle() {
    try {
        var db = Storage.LocalStorage.openDatabaseSync(getDbName(), getDbVersion(), getDbDescription(), 1000000);
    } catch (err) {
        console.log("Error opening database: " + dbName + " error: " + err);
    }
    return db
}
/* ****************************************************************************
 * dbDeleteGalaxyTracks
 */
function dbDeleteGalaxyTracks() {
    var db = dbGetHandle();
    db.transaction(function (tx) {
        tx.executeSql('DELETE FROM galaxyTracks');
    });
}
/* ****************************************************************************
 * setModel
 */
function setModel(orderBy, direction) {
    dbReadAllGalxyCalculations(orderBy, direction);
    appListViewGalaxyCalculator.model = listModelGalxyCalculator;
    appListViewGalaxyCalculator.update();
}
/* ****************************************************************************
 * Table: configuration
 * 0: galaxy,sunSize,livalbePlanetSize,trinaryEngines,galaxyRadius,printNthTrack
 * 1: galaxy
 * 2: sunSize
 * 3: livalbePlanetSize
 * 4: trinaryEngines
 * 5: galaxyRadius
 * 6: printNthTrack
 */
function dbInsertConfiguration(galaxy,sunSize,livalbePlanetSize,trinaryEngines,galaxyRadius,printNthTrack) {
    console.debug("dbInsertConfiguration(galaxy=" + galaxy + ", sunSize=" + sunSize + ", livalbePlanetSize=" + livalbePlanetSize + ", trinaryEngines=" + trinaryEngines + ", galaxyRadius=" + galaxyRadius + ", printNthTrack=" + printNthTrack + ")");
    var db = dbGetHandle();
    var rowid = 0;
    // INSERT INTO configuration (galaxy, sunSize, livalbePlanetSize, trinaryEngines, galaxyRadius, printNthTrack) VALUES(?, ?, ?, ?, ?, ?), ['Milky Way',864575.9,7926.2109,333,241828072282107.5071453596951,66]
    db.transaction(function (tx) {
        console.debug("INSERT INTO configuration (galaxy, sunSize, livalbePlanetSize, trinaryEngines, galaxyRadius,  printNthTrack) VALUES(?, ?, ?, ?, ?, ?), ['" + galaxy + "'," + sunSize + "," + livalbePlanetSize + "," + trinaryEngines + "," + galaxyRadius + ",'"  + printNthTrack + "]");
        tx.executeSql('INSERT INTO configuration (galaxy, sunSize, livalbePlanetSize, trinaryEngines, galaxyRadius,  printNthTrack) VALUES(?, ?, ?, ?, ?, ?)',
                      [galaxy, sunSize, livalbePlanetSize, trinaryEngines, galaxyRadius, printNthTrack]);
        var result = tx.executeSql('SELECT last_insert_rowid()');
        rowid = result.insertId;
    });
    dbReadAllConfigurations();
    return rowid;
}
/* ****************************************************************************
 * Table: galaxyTracks
 * 0: currentTrackNumber, trackEngines, maxSpeed, minSpeed, lpFrequency, orbitDist, trackFreq
 * 1: currentTrackNumber
 * 2: trackEngines
 * 3: maxSpeed
 * 4: minSpeed
 * 5: lpFrequency
 * 6: orbitDist
 * 7: trackFreq
 */
function dbInsertGalaxyTrack(currentTrackNumber, trackEngines, maxSpeed, minSpeed, lpFrequency, orbitDist, trackFreq) {
    var db = dbGetHandle();
    var rowid = 0;
    console.debug("dbInsertGalaxyTrack(currentTrackNumber=" + currentTrackNumber + ", trackEngines=" + trackEngines + ", maxSpeed=" + maxSpeed + ", minSpeed=" + minSpeed + ", lpFrequency=" + lpFrequency + ", orbitDist=" + orbitDist + ", trackFreq=" + trackFreq + ")");
    db.transaction(function (tx) {
        tx.executeSql(
            'INSERT INTO galaxyTracks (currentTrackNumber, trackEngines, maxSpeed, minSpeed, lpFrequency, orbitDist, trackFreq) VALUES(?, ?, ?, ?, ?, ?, ?)',
            [currentTrackNumber, trackEngines, maxSpeed, minSpeed, lpFrequency, orbitDist, trackFreq]);
        var result = tx.executeSql('SELECT last_insert_rowid()');
        rowid = result.insertId;
    });
    setModel("rowid", "ASC");
    return rowid;
}
/* ****************************************************************************
 * Table: configuration
 * 0: galaxy,sunSize,livalbePlanetSize,trinaryEngines,galaxyRadius,printNthTrack
 * 1: galaxy
 * 2: sunSize
 * 3: livalbePlanetSize
 * 4: trinaryEngines
 * 5: galaxyRadius
 * 6: printNthTrack
 *
 */
function dbReadAllConfigurations() {
    // get Database Handle
    var db = dbGetHandle();
    // clear listModel
    console.debug("listModel.count=" + listModelConfiguration.count)
    listModelConfiguration.clear();
    console.debug("listModel.count=" + listModelConfiguration.count)
    //console.debug("SELECT rowid, galaxy, sunSize, livalbePlanetSize, trinaryEngines, galaxyRadius, printNthTrack FROM configuration order by rowid desc")
    db.transaction(function (tx) {
        var i;
        var results = tx.executeSql(
            'SELECT rowid, galaxy, sunSize, livalbePlanetSize, trinaryEngines, galaxyRadius, printNthTrack FROM configuration order by rowid desc');
        for (i = 0; i < results.rows.length; i++) {
            console.debug("id=" + results.rows.item(i).rowid + " galaxy: " + results.rows.item(i).galaxy);
            listModelConfiguration.append({
                galaxy: results.rows.item(i).galaxy,
            });
        } // end for
        for (i = 0; i < results.rows.length; i++) {
            console.debug("id=" + results.rows.item(i).rowid + " galaxy: " + results.rows.item(i).galaxy);
            listModelConfigurationDb.append({
                // Name change id rowid
                rowid: results.rows.item(i).rowid,
                galaxy: results.rows.item(i).galaxy,
                sunSize: results.rows.item(i).sunSize,
                livalbePlanetSize: results.rows.item(i).livalbePlanetSize,
                trinaryEngines: results.rows.item(i).trinaryEngines,
                galaxyRadius: results.rows.item(i).galaxyRadius,
                printNthTrack: results.rows.item(i).printNthTrack
            });
        } // end for
        console.debug("listModelConfiguration.count=" + listModelConfiguration.count)
        console.debug("listModelConfigurationDb.count=" + listModelConfigurationDb.count)
    });
}
/* ****************************************************************************
 * Table: galaxyTracks
 * 0: currentTrackNumber, trackEngines, maxSpeed, minSpeed, lpFrequency, orbitDist, trackFreq
 * 1: currentTrackNumber
 * 2: trackEngines
 * 3: maxSpeed
 * 4: minSpeed
 * 5: lpFrequency
 * 6: orbitDist
 * 7: trackFreq
 * direction= DESC ASC
 */
function dbReadAllGalxyCalculations(orderBy, direction) {
    var db = dbGetHandle();
    listModelGalxyCalculator.clear();
    console.debug("sql=" + "SELECT rowid,currentTrackNumber,trackEngines,maxSpeed,minSpeed,lpFrequency,orbitDist,trackFreq FROM galaxyTracks ORDER BY " + orderBy + " " + direction)
    db.transaction(function (tx) {
        var results = tx.executeSql(
            "SELECT rowid,currentTrackNumber,trackEngines,maxSpeed,minSpeed,lpFrequency,orbitDist,trackFreq FROM galaxyTracks ORDER BY " + orderBy + " " + direction);
        for (var i = 0; i < results.rows.length; i++) {
            console.debug("id=" + results.rows.item(i).rowid + " currentTrackNumber: " + results.rows.item(i).currentTrackNumber);
            listModelGalxyCalculator.append({
                rowid: results.rows.item(i).rowid,
                currentTrackNumber: results.rows.item(i).currentTrackNumber,
                trackEngines: results.rows.item(i).trackEngines,
                maxSpeed: results.rows.item(i).maxSpeed,
                minSpeed: results.rows.item(i).minSpeed,
                lpFrequency: results.rows.item(i).lpFrequency,
                orbitDist: results.rows.item(i).orbitDist,
                trackFreq: results.rows.item(i).trackFreq
            });
        } // end for
    })
}
/* ****************************************************************************
 * Table: configuration
 * 0: galaxy,sunSize,livalbePlanetSize,trinaryEngines,galaxyRadius,printNthTrack
 * 1: galaxy
 * 2: sunSize
 * 3: livalbePlanetSize
 * 4: trinaryEngines
 * 5: galaxyRadius
 * 6: printNthTrack
 *
 */
function dbUpdateConfiguration(galaxy,sunSize,livalbePlanetSize,trinaryEngines,galaxyRadius,printNthTrack,rowid) {
    var db = dbGetHandle();
    db.transaction(function (tx) {
        tx.executeSql(
            'update configuration set galaxy=?, sunSize=?, livalbePlanetSize=?, trinaryEngines=?, galaxyRadius=?, printNthTrack=? where rowid = ?', [galaxy,sunSize,livalbePlanetSize,trinaryEngines,galaxyRadius,printNthTrack,rowid])
    });
    dbReadAllConfigurations();
}
/* ****************************************************************************
 * Table: galaxyTracks
 * 0: currentTrackNumber, trackEngines, maxSpeed, minSpeed, lpFrequency, orbitDist, trackFreq
 * 1: currentTrackNumber
 * 2: trackEngines
 * 3: maxSpeed
 * 4: minSpeed
 * 5: lpFrequency
 * 6: orbitDist
 * 7: trackFreq
 *
 */
function dbUpdateGalaxyTracks(currentTrackNumber, trackEngines, maxSpeed, minSpeed, lpFrequency, orbitDist, trackFreq,Prowid) {
    var db = dbGetHandle();
    db.transaction(function (tx) {
        tx.executeSql(
            'update galaxyTracks set currentTrackNumber=?, trackEngines=?, maxSpeed=?, minSpeed=?, lpFrequency=?, orbitDist=?, trackFreq=? where rowid = ?', [currentTrackNumber,trackEngines,maxSpeed,minSpeed,lpFrequency,orbitDist,trackFreq,Prowid])
    });
    setModel("rowid", "ASC");
}
/* ****************************************************************************
 * dbDeleteRowConfiguration
 */
function dbDeleteRowConfiguration(Prowid) {
    var db = dbGetHandle();
    db.transaction(function (tx) {
        tx.executeSql(
            'delete from configuration where rowid = ?', [Prowid])
    });
    dbReadAllConfigurations();
}
/* ****************************************************************************
 * dbDeleteRowGalaxyTracks
 */
function dbDeleteRowGalaxyTracks(Prowid) {
    var db = dbGetHandle()
    db.transaction(function (tx) {
        tx.executeSql('delete from galaxyTracks where rowid = ?', [Prowid])
    });
    setModel("rowid", "ASC");
}
/* ****************************************************************************
 * getDbSetting
 */
function getDbSetting(fieldName, defaultValue) {
    var tempSetting = app.settings.getValue(fieldName);
    if(tempSetting === undefined) {
        tempSetting = defaultValue;
    }
    if(tempSetting === "") {
        tempSetting = defaultValue;
    }
    app.settings.setValue(fieldName, tempSetting);
    return tempSetting;
} // end getDbSetting
/* ****************************************************************************
 * setDbSetting
 */
function setDbSetting(fieldName, theValue) {
    app.settings.setValue(fieldName, theValue);
} // end setDbSetting
/* ****************************************************************************
 *
 */

/* ***************************** End of File ******************************* */

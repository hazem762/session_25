/* function getData () {
    let xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.setRequestHeader('content-type', "application/json");
    xhr.setRequestHeader(''); */

    /* 
        Authentication
        Authorization
    */

/*     xhr.onload = function () {
        if (xhr.status == 200) {
            console.log(JSON.parse(xhr.responseText));
        }
    };

    xhr.onerror = function () {
        console.log("Error");
    };

    xhr.send();
} */

/* let myData = null;

$.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    type: "GET",
    data: "",
    success: function (response) {
        myData = response;
        console.log("response");
    },
    error: function (error) {
        console.log("error");
    }
});

console.log(myData); */

// callBack Hell
/* setTimeout(function () {
    console.log("Hello 1");

    setTimeout(function () {
        console.log("Hello 2");

        setTimeout(function () {
            console.log("Hello 3");

            setTimeout(function () {
                console.log("Hello 4");

                setTimeout(function () {
                    console.log("Hello 5");
                }, 1000);

            }, 1000);

        }, 1000);

    }, 1000);

}, 1000); */


/* let myPromise = new Promise(function (resolve, reject) {

    let myData = ["Mohamed"];

    if (myData.length > 0) {
        resolve(myData);
    } else {
        reject("Error");
    }

});

myPromise
.then(function (res) {
    console.log(res);
    return "Hi 1";
})
.then(function (data) {
    console.log(data);
})
.catch(function (msg) {
    console.log(msg);
}); */


/* myPromise.then(function (response) {
    console.log(response);
    return "Hi";
})
.then(function () {

})
.catch(function (msg) {
    console.log(msg);
}); */


/* let myPromise = new Promise(function (resolve, reject) {

    let myData = ["Mohamed"];

    if (myData.length > 0) {
        resolve(myData);
    } else {
        reject("Error");
    }

});

myPromise
.then(function (res) {
    console.log(res);
    return "Hi 1";
})
.catch(function (msg) {
    console.log(msg);
}).finally(function() {
    console.log("ok");
}); */

/* function delayLog(status) {

    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            resolve(status);
        }, 1000)
    });
}

delayLog("Hello 1").then(function (res) {
    console.log(res);
}).then(function (data) {

});
 */

/* myPromise = new Promise (function (resolve, reject) {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.onload = function () {
        if (this.status == 200) {
            resolve(JSON.parse(xhr.responseText));
        } else {
            reject("Error");
        }
    }

    xhr.send();

});

myPromise.then(function (res) {
    console.log(res);
}).catch(function(msg) {
    console.log(msg);
}); */


/* $.ajax ({
    url: "https://jsonplaceholder.typicode.com/users",
    type: "GET",
    data: "",
    success: function(res) {
        console.log(res);
    },
    error: function(rej) {
        console.log(rej);
    }
}).then(function () {
    console.log("dfnsfdk");
}); */

/* fetch("https://jsonplaceholder.typicode.com/posts?userId=10").then(function (data) {
    return data.json();
}).then(function (data) {
    console.log(data);
}); */ 

/* function getData () {
    // return new Promise (function (resolve, reject) {
    // });
    let myData = ["Mohamed"];

    if (myData.length > 0) {
        return Promise.resolve(myData);
    } else {
        return Promise.reject("Error")
    }
}

getData().then(function (data) {
    console.log(data);
}).catch(function (msg) {
    console.log(msg);
});
 */

/* let myPromise = new Promise (function (resolve, reject) {
    setTimeout(function () {
        resolve("Hello 2");
    }, 1000);
});

async function myFun () {
    console.log("Hello 1");
    await myPromise.then(function (data) {
        console.log(data);
    });
    console.log("Hello 3");
}

myFun(); */


try {

    let myData = ["dfgfds"];

    if (myData.length > 0) {
        console.log(myData);
    } else {
        throw Error("Error svzcx");
    }

} catch (error) {
    console.log(error);
}
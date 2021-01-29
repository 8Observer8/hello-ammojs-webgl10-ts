requirejs.config({
    baseUrl: "js",
    paths: {
        "gl-matrix": "https://cdn.jsdelivr.net/npm/gl-matrix@3.3.0/gl-matrix-min",
        "ammojs-typed": "https://dl.dropboxusercontent.com/s/e5iytx67noqoew7/ammo"
    }
});

requirejs(["main"], () => { });

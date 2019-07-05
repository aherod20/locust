function displayRuntimeOptions() {
    if (document.getElementById("runtime_options").getAttribute("value") == "define_runtime") {
        document.getElementById("runtime").style.display = "block";
    } else {
        document.getElementById("runtime").style.display = "none";
    }
}
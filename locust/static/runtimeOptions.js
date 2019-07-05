function displayRuntimeOptions() {
    var drop_down = document.getElementById("runtime_options")
    if (drop_down.options[drop_down.selectedIndex].value == "define_runtime") {
        document.getElementById("runtime").style.display = "block";
        document.getElementById("runtime_label").style.display = "block";
    } else {
        document.getElementById("runtime").style.display = "none";
        document.getElementById("runtime_label").style.display = "none";
    }
}
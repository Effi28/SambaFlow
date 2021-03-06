function handleFileSelect(fileID) {
    return new Promise((resolve, reject) => {
        if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
            alert('The File APIs are not fully supported in this browser.');
            return;
        }

        input = document.getElementById(fileID);
        if (!input) {
            alert("Um, couldn't find the fileinput element.");
        } else if (!input.files) {
            alert("This browser doesn't seem to support the `files` property of file inputs.");
        } else if (!input.files[0]) {
            //console.log("Please select a file before clicking 'Load'");
        } else {
            file = input.files[0];
            var reader = new FileReader();
            reader.onload = function(e) {
                var text = reader.result;
                switch (fileID) {
                    case "trainingXFile":
                        data.data.train_x = text;
                        break;
                    case "trainingYFile":
                        data.data.train_y = text;
                        break;
                    case "testingXFile":
                        data.data.test_x = text;
                        break;
                    case "testingYFile":
                        data.data.test_y = text;
                        break;
                    case "validationXFile":
                        data.data.valid_x = text;
                        break;
                    case "validationYFile":
                        data.data.valid_y = text;
                        break;
                }
                resolve("file uploaded");
            }
            reader.readAsText(file);
        }

    })

}

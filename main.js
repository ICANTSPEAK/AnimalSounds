

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/90D4q-3Qp/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('Background Noise');
        img1 = document.getElementById('Bark');
        img2 = document.getElementById('Meow');
        img3 = document.getElementById('Moo');
        img4 = document.getElementById('Roar')

        if (results[0].label == "Background Noise") {
            img.src = 'ear.jpg';
        } else if (results[0].label == "Bark") {
            img1.src = 'dog.jpeg';
        } else if(results[0].label == "Meow") {
            img2.src = 'cat.png';
        } else if(results[0].label == "Moo") {
            img3.src = 'cow.jpg';
        } else{
            img4.src = 'lion.jpg';
        }
    }
}
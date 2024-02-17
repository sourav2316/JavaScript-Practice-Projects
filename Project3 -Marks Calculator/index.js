const calculateFormEl = document.getElementById("calculateForms");
const resultEl = document.getElementById("result");

const calculateMarks = (event) => {
    const maxMarks = 400;
    event.preventDefault();

    const formData = new FormData(calculateFormEl);

    const data = {};
    
    formData.forEach((value, key)=> {
        data[key] = +value;
    });

    const totalMarks = data.maths + data.science + data.social + data.english;
    const percentage = ((totalMarks / maxMarks)* 100);
    resultEl.innerHTML = `You Have got ${totalMarks} out of ${maxMarks} and your percentage is ${percentage}%`;
};
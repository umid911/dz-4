// Задарине  - а


const data = ['Иван', 'Иванов', 'Отдел разработки', 'Программист', 2000];

function func(emp) {

    let [data1, data2, data3, data4, data5, ] = emp

    console.log(data1, data2, data3, data4, data5, );
}

func(data);

// Задание - b


const data2 = ['Иван', 'Иванов', 'Отдел разработки', 'Программист', 2000];

function func2(emp) {

    let [data1, data2, data3] = emp

    console.log(data1, data2, data3);
}

func2(data2);


// Задание - c



const info = ['Иван', 'Иванов', 'Отдел разработки']

function func(emp){
    let [name, surname, department] = emp
    let position
    if(data[3] !== undefined){
        position = data[3]
    }else{
        position = 'Программист'
    }
    console.log(name, surname, department, position)
}
func(info)


// Задание - d

const colors = {
    color: 'red',
    width: 400,
    height: 500
};
function funcc (options){

    const{color,width,height} = colors
    
    console.log(color,width,height);
}
funcc(colors);
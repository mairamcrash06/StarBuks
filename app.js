var SB = {
    coffee: {
        capuccino: 'кофе капучино',
        americano: 'кофе американо',
    },
    tea: {
        blackTea: 'чай цейлонский',
        greenTea: 'чай китайский',
    },
    fizzy: {
        coke: 'кола',
        fanta: 'фанта',
    }
}

var userChoose = prompt('What do you want?')

if (userChoose === SB.coffee.capuccino) {
    alert("Вот ваш " + SB.coffee.capuccino)
}
else if (userChoose === SB.coffee.americano) {
    alert("Вот ваш " + SB.coffee.americano)
} 
else if (userChoose === SB.tea.blackTea) {
    alert("Вот ваш " + SB.tea.blackTea)
}
else if (userChoose === SB.tea.greenTea) {
    alert("Вот ваш " + SB.tea.greenTea)
} 
else if (userChoose === SB.fizzy.coke) {
    alert("Вот ваш " + SB.fizzy.coke)
} 
else if (userChoose === SB.fizzy.fanta) {
    alert("Вот ваш " + SB.fizzy.fanta)
} 
else {
    alert("У нас нет такого напитка")
}
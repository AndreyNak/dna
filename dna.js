function Complite()
    {
      let list = [];
      let elem = document.formDNA.DNA.value;
      let array = elem.split(/(?=[A-Z])/);
      
      if (!array) {
        alert('Введите значения');
      } else {
        for (let index = 0; index < array.length; index++) {
          element = array[index];
          console.log(element);
          
          if (element == 'G') {
            element = 'C';
          }else if (element == 'C') {
            element = 'G';
          }else if (element == 'T') {
            element = 'A';
          }else if (element == 'A') {
            element = 'U';
          }else {
            return alert('Введите корректное значение');
          } 
          list.push(element);
        }
        if (list) {
          alert(list);
          console.log(list);
        }      
      }  
    };

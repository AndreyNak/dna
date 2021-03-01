function Complite()
        {
            let list = [];
            let elem = document.formDNA.DNA.value;
            let array = elem.split(/(?=[A-Z])/);
            
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
                }
                list.push(element);
            }
            alert(list);
        
        };
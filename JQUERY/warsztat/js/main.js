$(function() {

    let formPizzaOrder = $('.pizzaOrder');
    //console.log(formPizzaOrder);

    let inputfirstName = $('.firstName');
    let inputlastName = $('.lastName');

    let inputadress = $('.adress');
    let inputnumberAdress = $('.numberAdress');

    let inputPostCode = $('.postCode')
    let inputCity = $('.city');

    let selectTypeOfPizza = $('.typeOfPizza');
    let inputprice = $('.price0');

    let inputTomatoSauce = $('.tomatoSauce');
    let inputGarlicSauce = $('.garlicSauce');

    let inputAgrement = $('.agrement');
    let ulErrors = $('.errors');


    let pizzaPriceTable = [
        { value: 1, price: 22 },
        { value: 2, price: 24 },
        { value: 3, price: 26 },
    ];

    selectTypeOfPizza.change(function () {

        let pizzaType = $(this).val();

        if (pizzaType == 0) {
            inputprice.text("0 PLN");
            return;
        }

        pizzaPriceTable.forEach(function (tableElement) {
            if (pizzaType == tableElement.value) {
                inputprice.text(tableElement.price + " PLN")
                return;
            }

        });

    });

    formPizzaOrder.submit(function() {
    
       ulErrors.empty();
        let errorsArry = [];

        if ($.trim(inputfirstName.val()) == "") {
            errorsArry.push("Uzupełnij pole: Imie")
        }

        if ($.trim(inputlastName.val()) == "") {
            errorsArry.push('Uzupełnij pole: Nazwisko')
        }

        if (inputAgrement.is(':checked') == false) {
            errorsArry.push("Musisz zgodzić się na RODO");
        }

        if (selectTypeOfPizza.val() == 0) {
            errorsArry.push("Wybierz pizze")
        }

        if ($.trim(inputCity.val()) == "") {
            errorsArry.push("Uzupełnij pole City")
        }

        if (errorsArry.lenght != 0) {
            errorsArry.forEach(function (error) {
                let liError = "<li>" + error + "</li>";
                errors.append(liError);
            });

            return false;

        }

        let orderObject = {
            inputfirstName: $.trim(inputfirstName.val()),
            inputlastName: $.trim(inputlastName.val()),
            inputadress : $.trim(inputadress.val()),
            saucees: [
                inputTomatoSauce.is(':checked'), inputGarlicSauce.is(':checked')
            ]

        };

        console.log(orderObject);
        console.log(JASON.stringify(orderObject));
        return false;

    });

});

/*
$(function() {
    
    let formPizzaOrder = $('.pizza-order');
    
    let firstName = $(".first-name");
    let lastName = $(".last-name");
    
    let street = $(".street");
    let streetNo = $(".street-no");
    
    let postCode = $(".post-code");
    let city = $(".city");
    
    let pizza = $(".pizza");
    let price = $(".price");
    
    let tomatoSauce = $(".tomato-sauce");
    let garlicSauce = $(".garlic-sauce");
    
    let agree = $(".agree");
    
    let errors = $(".errors");
    
    let pizzaPriceTable = [
        {value: 1, price: 22},
        {value: 2, price: 24},
        {value: 3, price: 26},
        {value: 4, price: 29},
        {value: 5, price: 21},
    ];
    
    pizza.change( function() {

        let pizzaType = $(this).val();
        
        if (pizzaType == 0) {
            price.text("0 PLN");
            return;
        }

        pizzaPriceTable.forEach( function(tableElement) {
            if ( pizzaType == tableElement.value ) {
                price.text(tableElement.price + " PLN")
                return;
            }
        });
        
        // console.log("zmiana pizzy na " + pizzaType);
        
    });


    formPizzaOrder.submit( function() {

        errors.empty();

        let errorsArray = [];

        if ( $.trim(firstName.val()) == "") {
            errorsArray.push("Uzupełnij pole: Imie");
        }    

        if ( $.trim(lastName.val()) == "") {
            errorsArray.push("Uzupełnij pole: Nazwisko");
        } 

        if ( $.trim(street.val()) == "") {
            errorsArray.push("Uzupełnij pole: Ulica");
        } 

        if ( $.trim(streetNo.val()) == "") {
            errorsArray.push("Uzupełnij pole: Numer");
        } 

        if ( $.trim(postCode.val()) == "") {
            errorsArray.push("Uzupełnij pole: Kod pocztowy");
        } 

        if ( $.trim(city.val()) == "") {
            errorsArray.push("Uzupełnij pole: Miasto");
        } 

        if ( pizza.val() == 0 ) {
            errorsArray.push("Wybierz Pizzę!");
        }


        if ( agree.is(':checked') == false ) {
            errorsArray.push("Musisz zgodzić się na RODO :)");
        }



        if (errorsArray.length != 0) {

            errorsArray.forEach(function(error) {
                let liError = "<li>" + error + "</li>";
                errors.append(liError);
            });

            return false;
        }

        let orderObject = {
            firstName: $.trim(firstName.val()),
            lastName: $.trim(lastName.val()),
            street: $.trim(street.val()),
            streetNo: $.trim(streetNo.val()),
            postCode: $.trim(postCode.val()),
            city: $.trim(city.val()),
            pizza: $.trim(pizza.val()),
            sauces: [
                tomatoSauce.is(":checked"), garlicSauce.is(":checked")
            ]
        };

        console.log(orderObject);
        console.log(JSON.stringify(orderObject));

        return false;
    });
    
});
*/
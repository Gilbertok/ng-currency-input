/*
 * ng-currency

 * Version: 0.0.1 - 19-01-2015
 * License: OPEN-SOURCE
 */

angular.module('ng-currency-input', [])
    .directive('currencyInput', ['$locale' , function ($locale) {
        return {

            restrict: 'A',
            replace: true,
            require: 'ngModel',
            template: '<input type="text" class="form-control" style="text-align: right;">',
            
            link: function (scope, element, attrs, ctrl) {

                var padraoInt = /^-?[0-9]+$/
                var padraoFloat = /^-?[0-9]+.[0-9]+$/

                function unformat(valor) {
                    if (valor != null){
                        if (typeof valor is "number" and valor.toString().length is 1){
                            valor = valor.toString() + "00"
                        } else if (typeof valor is "number" and valor.toString().indexOf(".") >= 0) {
                            parse = valor.toString().split(".")
                            if (parse[1].length is 1) {
                                valor = valor.toString() + "0"
                            }
                            valor = valor.toString().replace(".","")
                        } else if (typeof valor is "number"){
                            valor = valor.toString() + "00"
                        } else {
                            valor = valor.toString().replace(",", "")
                            valor = parseFloat(valor.toString()).toString()
                            valor = valor.replace(".","")
                        }
                    return valor;
                }

                function formatPreco(valor) {
                    if (valor == null || padraoInt.test(valor) || padraoFloat.test(valor)) {
                        return "0,00";
                    }
                    var scale = 2;
                    var formated = "";
                    var thousandsCount = 0;
                    valor = unformat(valor);

                    for (var i = valor.length - 1; i >= 0; i--) {
                        var campo = valor.substr(i, 1);
                        if (campo == ".") {
                            formated = "." + formated;
                            formated = formated.substr(0, scale + 1);
                            if (scale <= 0){
                                formated = ""
                            }
                            continue
                        }
                        if ("," != null && campo != "-"){
                            if (formated.length <=2) {
                                if (thousandsCount == 2){
                                    formated = "," + formated;
                                    thousandsCount = 0;
                                }
                            } else
                                if (thousandsCount == 3){
                                    formated = "." + formated;
                                    thousandsCount = 0;
                                }
                            thousandsCount++;
                        }
                        formated = campo + formated;
                    };

                    if (formated.length === 1) {
                        formated = "0,0" + formated.toString();
                    }
                    if (formated.length === 2){
                        formated = "0," + formated.toString();
                    }
                    if (formated != "0,00" && formated.substr(0,2) != ("0,")){
                        formated = formated.substr(formated.search(/[^0]/), formated.length - formated.search(/[^0]/));
                    }

                    return formated;
                }

                function setCaretToBegin(input) {
                    input.setSelectionRange(input.selectionEnd, input.selectionEnd);
                }

                element.on('keyup', function (event) {
                    var e = event || window.event;
                    var charCode = e.charCode || e.keyCode;
                });

                element.on('keypress', function (event) {
                    var e = event || window.event
                    var charCode = e.charCode || e.keyCode
                });

                element.on('focus', function (event) {
                    setCaretToBegin(this)
                    event.preventDefault()
                });

                scope.$watch( function() {
                    valor = formatPreco(ctrl.$modelValue)
                    return element.val(valor)
                });

                ctrl.$formatters.unshift(function (modelValue) {
                    console.log('formatters');
                    modelValue = formatPreco(modelValue);
                    return modelValue
                });

                ctrl.$parsers.unshift(function (viewValue) {
                    return viewValue
                });
            }
        };

    }]);

var dictionary = {
    "en": {
        "username_placeHolder" : "Search the treasures",
        "username_cart" : "Cart",
        "username_clearcart" : "Clear Cart",
        "closecart" : "Close",
        "cartorder" : "Order now"
        
    },
    "hi": {
       
        "username_placeHolder" : "खजाने की खोज करें",
        "username_cart" : "कार्ट",
        "username_clearcart" : "कार्ट को खाली करें",
        "closecart" : "बंद करे",
        "cartorder" : "ऑर्डर करें"

    },

    "mr":{
        "username_placeHolder" : "ट्रेझर्स शोधा",
        "username_cart" : "कार्ट",
        "username_clearcart" : "कार्ट रिकामे करा",
        "closecart" : "बंद करा",
        "cartorder" : "आता ऑर्डर करा"
    }
};


var set_lang = function (dictionary) {
    $("[data-translate]").each(function(){
       if($(this).is( "input" )){
          $(this).attr('placeholder',dictionary[$(this).data("translate")] )
       } else{
           $(this).text(dictionary[$(this).data("translate")])
           $(this).attr('title',dictionary[$(this).data("translate")] )
       }
    })
};

// Swap languages when menu changes
var change_lang = function (lang) {
var language = lang;
if (dictionary.hasOwnProperty(language)) {
    set_lang(dictionary[language]);
}
}
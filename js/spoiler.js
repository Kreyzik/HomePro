$(document).ready(function (){
    $('.item-spoylers-frequently').click(function(event){

        if($('.item-spoylers-frequently').hasClass('one')){
            $('.item-spoylers-frequently').not($(this)).removeClass('active');
            $('.item-spoylers-frequently__text').not($(this).next());
        }


        $(this).toggleClass('active');
    });
});
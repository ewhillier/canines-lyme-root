$(document).ready(function() {
    
    $('#nextTransfer').click(function () {
        $('#diseaseTransfer').addClass('transition');
        $('#diseaseTransfer').addClass('isOnTop');
        $('#nextTransfer').addClass('isHidden');
        $('#nextTransfer').removeClass('isAbsolute');
        $('#armTickScroll').addClass('armTickAnimate');
        $('#armRashScroll').addClass('armRashAnimate');
        $('#armSpirocheteScrollOne').addClass('armSpirocheteAnimate');
        $('#armSpirocheteScrollTwo').addClass('armSpirocheteAnimate');
        $('#armSpirocheteScrollThree').addClass('armSpirocheteAnimate');
        $('#nextAnalysis').addClass('isAbsolute');
        $('#nextAnalysis').removeClass('isHidden');
    });
    
    $('#nextAnalysis').click(function () {
        $('#analysis').addClass('transition');
        $('#analysis').addClass('isOnTop');
        $('#nextAnalysis').addClass('isHidden');
        $('#nextAnalysis').removeClass('isAbsolute');
        $('#increasingDescription').addClass('revealIncreasingDescription');
        $('#increasingFilled').addClass('graphIncreasingFillAnimation');
        $('#descreasingDescription').addClass('revealDecreasingDescription');
        $('#oppositeDescription').addClass('revealOppositeDescription');
        $('#oppositeFilled').addClass('graphOppositeFillAnimation');
        $('#percentageDescription').addClass('revealPercentageDescription');
        $('#percentageFilled').addClass('graphPercentageFillAnimation');
        $('.purpleState').addClass('purpleStateAnimation');
        $('.blueState').addClass('blueStateAnimation');
        $('#nextYourState').addClass('isAbsolute');
        $('#nextYourState').removeClass('isHidden');
        $('.mountainPeaks').addClass('isAbsolute');
        $('.selectNewState').addClass('isAbsolute');
    });
    
    $('#nextYourState').click(function () {
        $('#yourStateSection').addClass('transition');
        $('#yourStateSection').addClass('isOnTop');
        $('#nextAnalysis').addClass('isHidden');
        $('#nextAnalysis').removeClass('isAbsolute');
        $('.mountainPeaks').removeClass('isAbsolute');
        $('#nextYourState').addClass('isAbsolute');
        $('#nextYourState').removeClass('isHidden');
    });
    
    $('.selectNewState').click(function () {
        $('#yourStateSection').addClass('transition');
        $('#yourStateSection').addClass('isOnTop');
        $('#nextAnalysis').addClass('isHidden');
        $('#nextAnalysis').removeClass('isAbsolute');
        $('.mountainPeaks').removeClass('isAbsolute');
        $('#nextYourState').addClass('isAbsolute');
        $('#nextYourState').removeClass('isHidden');
    });
    
});
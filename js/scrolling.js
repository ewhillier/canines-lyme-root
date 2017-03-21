$(document).ready(function() {
    
    $('#nextTransfer').click(function () {
        $('#diseaseTransfer').addClass('isOnTop');
        $('#diseaseTransfer').animate({top: "0"}, 600);
        $('#nextTransfer').addClass('isHidden');
        $('#nextTransfer').removeClass('isAbsolute');
        $('#armTickScroll').addClass('armTickAnimate');
        $('#armRashScroll').addClass('armRashAnimate');
        $('#armSpirocheteScrollOne').addClass('armSpirocheteAnimate');
        $('#armSpirocheteScrollTwo').addClass('armSpirocheteAnimate');
        $('#armSpirocheteScrollThree').addClass('armSpirocheteAnimate');
        $('#nextYourState').addClass('isAbsolute');
        $('#nextYourState').removeClass('isHidden');
    });
    
    $('#nextAnalysis').click(function () {
        $('#analysis').removeClass('isHidden');
        $('#analysis').addClass('isOnTop');
        $('#analysis').animate({marginTop: "0"}, 600);
        $('#nextAnalysis').addClass('isHidden');
        $('#nextAnalysis').removeClass('isAbsolute');
        $('#analysisHeading').addClass('revealAnalysisDescription');
        $('.analysisP').addClass('revealAnalysisDescription');
        $('#increasingDescription').addClass('revealIncreasingDescription');
        $('#increasingFilled').addClass('graphIncreasingFillAnimation');
        $('#descreasingDescription').addClass('revealDecreasingDescription');
        $('#oppositeDescription').addClass('revealOppositeDescription');
        $('#oppositeFilled').addClass('graphOppositeFillAnimation');
        $('#percentageDescription').addClass('revealPercentageDescription');
        $('#percentageFilled').addClass('graphPercentageFillAnimation');
        $('.purpleState').addClass('purpleStateAnimation');
        $('.blueState').addClass('blueStateAnimation');
        $('#nextTransfer').addClass('isAbsolute');
        $('#nextTransfer').removeClass('isHidden');
        $('#beforeHome').addClass('isAbsolute');
        $('#beforeHome').removeClass('isHidden');
        $('.mountainPeaks').addClass('isAbsolute');
        $('.selectNewState').addClass('isAbsolute');
    });
    
    $('#nextYourState').click(function () {
        $('#yourStateSection').addClass('isOnTop');
        $('#yourStateSection').animate({top: "0"}, 600);
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
        $('.tickOne').addClass('isHidden');
        $('.tickTwo').addClass('isHidden');
        $('.tickThree').addClass('isHidden');
        $('.tickFour').addClass('isHidden');
        $('.tickFive').addClass('isHidden');
        $('.tickSix').addClass('isHidden');
    });
    
    $('#newStateButton').click(function () {
        $('.stateSection').removeClass('z-index-one');
        $(this).addClass('isHidden');
    });
    
    $('#oregonStats').click(function () {
        $('#oregon').addClass('transition');
        $('#oregon').addClass('isOnTop');
        $('#oregon').addClass('z-index-one');
        $('#oregonAnimation').addClass('oregonStateAnimation');
        $('#oregonElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#oregonTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#oregonTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#oregonTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#oregonThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#oregonThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
        $('.tickOne').addClass('z-index-two');
    });
    
    $('#washingtonStats').click(function () {
        $('#washington').addClass('transition');
        $('#washington').addClass('isOnTop');
        $('#washington').addClass('z-index-one');
        $('#washingtonAnimation').addClass('nebraskaStateAnimation');
        $('#washingtonElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#washingtonTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#washingtonTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#washingtonThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#washingtonTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#washingtonThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#californiaStats').click(function () {
        $('#california').addClass('transition');
        $('#california').addClass('isOnTop');
        $('#california').addClass('z-index-one');
        $('#californiaAnimation').addClass('californiaStateAnimation');
        $('#californiaElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#californiaTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#californiaTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#californiaTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#californiaThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#californiaThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#nevadaStats').click(function () {
        $('#nevada').addClass('transition');
        $('#nevada').addClass('isOnTop');
        $('#nevada').addClass('z-index-one');
        $('#nevadaAnimation').addClass('nevadaStateAnimation');
        $('#nevadaElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#nevadaTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#nevadaTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#nevadaTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#nevadaThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#nevadaThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#idahoStats').click(function () {
        $('#idaho').addClass('transition');
        $('#idaho').addClass('isOnTop');
        $('#idaho').addClass('z-index-one');
        $('#idahoAnimation').addClass('idahoStateAnimation');
        $('#idahoElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#idahoTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#idahoTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#idahoTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#idahoThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#idahoThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#arizonaStats').click(function () {
        $('#arizona').addClass('transition');
        $('#arizona').addClass('isOnTop');
        $('#arizona').addClass('z-index-one');
        $('#arizonaAnimation').addClass('arizonaStateAnimation');
        $('#arizonaElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#arizonaTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#arizonaTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#arizonaTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#arizonaThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#arizonaThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#utahStats').click(function () {
        $('#utah').addClass('transition');
        $('#utah').addClass('isOnTop');
        $('#utah').addClass('z-index-one');
        $('#utahAnimation').addClass('utahStateAnimation');
        $('#utahElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#utahTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#utahTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#utahTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#utahThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#utahThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#montanaStats').click(function () {
        $('#montana').addClass('transition');
        $('#montana').addClass('isOnTop');
        $('#montana').addClass('z-index-one');
        $('#montanaAnimation').addClass('montanaStateAnimation');
        $('#montanaElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#montanaTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#montanaTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#montanaTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#montanaThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#montanaThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#wyomingStats').click(function () {
        $('#wyoming').addClass('transition');
        $('#wyoming').addClass('isOnTop');
        $('#wyoming').addClass('z-index-one');
        $('#wyomingAnimation').addClass('wyomingStateAnimation');
        $('#wyomingElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#wyomingTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#wyomingTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#wyomingTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#wyomingThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#wyomingThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#coloradoStats').click(function () {
        $('#colorado').addClass('transition');
        $('#colorado').addClass('isOnTop');
        $('#colorado').addClass('z-index-one');
        $('#coloradoAnimation').addClass('coloradoStateAnimation');
        $('#coloradoElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#coloradoTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#coloradoTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#coloradoTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#coloradoThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#coloradoThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#newmexicoStats').click(function () {
        $('#newmexico').addClass('transition');
        $('#newmexico').addClass('isOnTop');
        $('#newmexico').addClass('z-index-one');
        $('#newmexicoAnimation').addClass('nevadaStateAnimation');
        $('#newmexicoElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#newmexicoTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#newmexicoTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#newmexicoTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#newmexicoThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#newmexicoThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#ndakotaStats').click(function () {
        $('#ndakota').addClass('transition');
        $('#ndakota').addClass('isOnTop');
        $('#ndakota').addClass('z-index-one');
        $('#ndakotaAnimation').addClass('ndakotaStateAnimation');
        $('#ndakotaElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#ndakotaTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#ndakotaTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#ndakotaTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#ndakotaThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#ndakotaThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#sdakotaStats').click(function () {
        $('#sdakota').addClass('transition');
        $('#sdakota').addClass('isOnTop');
        $('#sdakota').addClass('z-index-one');
        $('#sdakotaAnimation').addClass('sdakotaStateAnimation');
        $('#sdakotaElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#sdakotaTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#sdakotaTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#sdakotaTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#sdakotaThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#sdakotaThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#nebraskaStats').click(function () {
        $('#nebraska').addClass('transition');
        $('#nebraska').addClass('isOnTop');
        $('#nebraska').addClass('z-index-one');
        $('#nebraskaAnimation').addClass('nebraskaStateAnimation');
        $('#nebraskaElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#nebraskaTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#nebraskaTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#nebraskaTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#nebraskaThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#nebraskaThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#kansasStats').click(function () {
        $('#kansas').addClass('transition');
        $('#kansas').addClass('isOnTop');
        $('#kansas').addClass('z-index-one');
        $('#kansasAnimation').addClass('alabamaStateAnimation');
        $('#kansasElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#kansasTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#kansasTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#kansasTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#kansasThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#kansasThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#oklahomaStats').click(function () {
        $('#oklahoma').addClass('transition');
        $('#oklahoma').addClass('isOnTop');
        $('#oklahoma').addClass('z-index-one');
        $('#oklahomaAnimation').addClass('oklahomaStateAnimation');
        $('#oklahomaElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#oklahomaTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#oklahomaTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#oklahomaTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#oklahomaThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#oklahomaThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#texasStats').click(function () {
        $('#texas').addClass('transition');
        $('#texas').addClass('isOnTop');
        $('#texas').addClass('z-index-one');
        $('#texasAnimation').addClass('ndakotaStateAnimation');
        $('#texasElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#texasTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#texasTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#texasTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#texasThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#texasThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#minnesotaStats').click(function () {
        $('#minnesota').addClass('transition');
        $('#minnesota').addClass('isOnTop');
        $('#minnesota').addClass('z-index-one');
        $('#minnesotaAnimation').addClass('delawareStateAnimation');
        $('#minnesotaElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#minnesotaTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#minnesotaTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#minnesotaTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#minnesotaThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#minnesotaThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#iowaStats').click(function () {
        $('#iowa').addClass('transition');
        $('#iowa').addClass('isOnTop');
        $('#iowa').addClass('z-index-one');
        $('#iowaAnimation').addClass('californiaStateAnimation');
        $('#iowaElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#iowaTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#iowaTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#iowaTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#iowaThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#iowaThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#missouriStats').click(function () {
        $('#missouri').addClass('transition');
        $('#missouri').addClass('isOnTop');
        $('#missouri').addClass('z-index-one');
        $('#missouriAnimation').addClass('arizonaStateAnimation');
        $('#missouriElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#missouriTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#missouriTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#missouriTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#missouriThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#missouriThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#louisianaStats').click(function () {
        $('#louisiana').addClass('transition');
        $('#louisiana').addClass('isOnTop');
        $('#louisiana').addClass('z-index-one');
        $('#louisianaAnimation').addClass('alabamaStateAnimation');
        $('#louisianaElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#louisianaTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#louisianaTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#louisianaTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#louisianaThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#louisianaThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#wisconsinStats').click(function () {
        $('#wisconsin').addClass('transition');
        $('#wisconsin').addClass('isOnTop');
        $('#wisconsin').addClass('z-index-one');
        $('#wisconsinAnimation').addClass('conneticutStateAnimation');
        $('#wisconsinElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#wisconsinTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#wisconsinTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#wisconsinTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#wisconsinThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#wisconsinThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#illinoisStats').click(function () {
        $('#illinois').addClass('transition');
        $('#illinois').addClass('isOnTop');
        $('#illinois').addClass('z-index-one');
        $('#illinoisAnimation').addClass('illinoisStateAnimation');
        $('#illinoisElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#illinoisTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#illinoisTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#illinoisTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#illinoisThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#illinoisThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });

	$('#michiganStats').click(function () {
        $('#michigan').addClass('transition');
        $('#michigan').addClass('isOnTop');
        $('#michigan').addClass('z-index-one');
        $('#michiganAnimationOne').addClass('michiganStateAnimation');
        $('#michiganAnimationTwo').addClass('michiganStateAnimation');
        $('#michiganElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#michiganTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#michiganTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#michiganTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#michiganThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#michiganThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#indianaStats').click(function () {
        $('#indiana').addClass('transition');
        $('#indiana').addClass('isOnTop');
        $('#indiana').addClass('z-index-one');
        $('#indianaAnimation').addClass('indianaStateAnimation');
        $('#indianaElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#indianaTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#indianaTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#indianaTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#indianaThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#indianaThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#kentuckyStats').click(function () {
        $('#kentucky').addClass('transition');
        $('#kentucky').addClass('isOnTop');
        $('#kentucky').addClass('z-index-one');
        $('#kentuckyAnimation').addClass('arizonaStateAnimation');
        $('#kentuckyElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#kentuckyTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#kentuckyTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#kentuckyTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#kentuckyThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#kentuckyThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#tennesseeStats').click(function () {
        $('#tennessee').addClass('transition');
        $('#tennessee').addClass('isOnTop');
        $('#tennessee').addClass('z-index-one');
        $('#tennesseeAnimation').addClass('arizonaStateAnimation');
        $('#tennesseeElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#tennesseeTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#tennesseeTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#tennesseeTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#tennesseeThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#tennesseeThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#mississippiStats').click(function () {
        $('#mississippi').addClass('transition');
        $('#mississippi').addClass('isOnTop');
        $('#mississippi').addClass('z-index-one');
        $('#mississippiAnimation').addClass('mississippiStateAnimation');
        $('#mississippiElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#mississippiTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#mississippiTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#mississippiTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#mississippiThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#mississippiThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#alabamaStats').click(function () {
        $('#alabama').addClass('isOnTop');
        $('#alabama').addClass('z-index-one');
        $('#alabamaAnimation').addClass('alabamaStateAnimation');
        $('#alabamaElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#alabamaTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#alabamaTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#alabamaTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#alabamaThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#alabamaThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#georgiaStats').click(function () {
        $('#georgia').addClass('transition');
        $('#georgia').addClass('isOnTop');
        $('#georgia').addClass('z-index-one');
        $('#georgiaAnimation').addClass('californiaStateAnimation');
        $('#georgiaElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#georgiaTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#georgiaTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#georgiaTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#georgiaThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#georgiaThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#ohioStats').click(function () {
        $('#ohio').addClass('transition');
        $('#ohio').addClass('isOnTop');
        $('#ohio').addClass('z-index-one');
        $('#ohioAnimation').addClass('ndakotaStateAnimation');
        $('#ohioElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#ohioTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#ohioTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#ohioTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#ohioThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#ohioThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
   //check this when clickable
    $('#wvirginiaStats').click(function () {
        $('#wVirginia').addClass('transition');
        $('#wVirginia').addClass('isOnTop');
        $('#wVirginia').addClass('z-index-one');
        $('#wVirginiaAnimation').addClass('oregonStateAnimation');
        $('#wVirginiaElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#wVirginiaTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#wVirginiaTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#wVirginiaTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#wVirginiaThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#wVirginiaThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#virginiaStats').click(function () {
        $('#virginia').addClass('transition');
        $('#virginia').addClass('isOnTop');
        $('#virginia').addClass('z-index-one');
        $('#virginiaAnimation').addClass('californiaStateAnimation');
        $('#virginiaElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#virginiaTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#virginiaTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#virginiaTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#virginiaThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#virginiaThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#ncarolinaStats').click(function () {
        $('#ncarolina').addClass('transition');
        $('#ncarolina').addClass('isOnTop');
        $('#ncarolina').addClass('z-index-one');
        $('#ncarolinaAnimation').addClass('ncarolinaStateAnimation');
        $('#ncarolinaElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#ncarolinaTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#ncarolinaTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#ncarolinaTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#ncarolinaThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#ncarolinaThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#scarolinaStats').click(function () {
        $('#scarolina').addClass('transition');
        $('#scarolina').addClass('isOnTop');
        $('#scarolina').addClass('z-index-one');
        $('#scarolinaAnimation').addClass('scarolinaStateAnimation');
        $('#scarolinaElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#scarolinaTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#scarolinaTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#scarolinaTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#scarolinaThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#scarolinaThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#floridaStats').click(function () {
        $('#florida').addClass('transition');
        $('#florida').addClass('isOnTop');
        $('#florida').addClass('z-index-one');
        $('#floridaAnimation').addClass('californiaStateAnimation');
        $('#floridaElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#floridaTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#floridaTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#floridaTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#floridaThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#floridaThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#pennsylvaniaStats').click(function () {
        $('#pennsylvania').addClass('transition');
        $('#pennsylvania').addClass('isOnTop');
        $('#pennsylvania').addClass('z-index-one');
        $('#pennsylvaniaAnimation').addClass('pennsylvaniaStateAnimation');
        $('#pennsylvaniaElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#pennsylvaniaTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#pennsylvaniaTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#pennsylvaniaTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#pennsylvaniaThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#pennsylvaniaThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#marylandStats').click(function () {
        $('#maryland').addClass('transition');
        $('#maryland').addClass('isOnTop');
        $('#maryland').addClass('z-index-one');
        $('#marylandAnimation').addClass('conneticutStateAnimation');
        $('#marylandElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#marylandTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#marylandTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#marylandTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#marylandThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#marylandThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#newyorkStats').click(function () {
        $('#newyork').addClass('transition');
        $('#newyork').addClass('isOnTop');
        $('#newyork').addClass('z-index-one');
        $('#newyorkAnimationOne').addClass('newyorkStateAnimation');
        $('#newyorkAnimationTwo').addClass('newyorkStateAnimation');
        $('#newyorkElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#newyorkTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#newyorkTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#newyorkTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#newyorkThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#newyorkThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#delawareStats').click(function () {
        $('#delaware').addClass('transition');
        $('#delaware').addClass('isOnTop');
        $('#delaware').addClass('z-index-one');
        $('#delawareAnimation').addClass('delawareStateAnimation');
        $('#delawareElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#delawareTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#delawareTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#delawareTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#delawareThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#delawareThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#conneticutStats').click(function () {
        $('#conneticut').addClass('transition');
        $('#conneticut').addClass('isOnTop');
        $('#conneticut').addClass('z-index-one');
        $('#conneticutAnimation').addClass('conneticutStateAnimation');
        $('#conneticutElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#conneticutTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#conneticutTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#conneticutTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#conneticutThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#conneticutThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
     $('#vermontStats').click(function () {
        $('#vermont').addClass('transition');
        $('#vermont').addClass('isOnTop');
        $('#vermont').addClass('z-index-one');
        $('#vermontAnimation').addClass('ncarolinaStateAnimation');
        $('#vermontElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#vermontTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#vermontTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#vermontTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#vermontThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#vermontThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#newhampshireStats').click(function () {
        $('#newhampshire').addClass('transition');
        $('#newhampshire').addClass('isOnTop');
        $('#newhampshire').addClass('z-index-one');
        $('#newhampshireAnimation').addClass('newhampshireStateAnimation');
        $('#newhampshireElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#newhampshireTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#newhampshireTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#newhampshireTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#newhampshireThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#newhampshireThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#maineStats').click(function () {
        $('#maine').addClass('transition');
        $('#maine').addClass('isOnTop');
        $('#maine').addClass('z-index-one');
        $('#maineAnimation').addClass('conneticutStateAnimation');
        $('#maineElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#maineTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#maineTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#maineTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#maineThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#maineThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
 
    $('#rhodeislandStats').click(function () {
        $('#rhodeisland').addClass('transition');
        $('#rhodeisland').addClass('isOnTop');
        $('#rhodeisland').addClass('z-index-one');
        $('#rhodeislandAnimation').addClass('rhodeislandStateAnimation');
        $('#rhodeislandElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#rhodeislandTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#rhodeislandTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#rhodeislandTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#rhodeislandThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#rhodeislandThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#arkansasStats').click(function () {
        $('#arkansas').addClass('transition');
        $('#arkansas').addClass('isOnTop');
        $('#arkansas').addClass('z-index-one');
        $('#arkansasAnimation').addClass('alabamaStateAnimation');
        $('#arkansasElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#arkansasTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#arkansasTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#arkansasTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#arkansasThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#arkansasThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#massachusettsStats').click(function () {
        $('#massachusetts').addClass('transition');
        $('#massachusetts').addClass('isOnTop');
        $('#massachusetts').addClass('z-index-one');
        $('#massachusettsAnimation').addClass('massachusettsStateAnimation');
        $('#massachusettsElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#massachusettsTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#massachusettsTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#massachusettsTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#massachusettsThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#massachusettsThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    $('#newjerseyStats').click(function () {
        $('#newjersey').addClass('transition');
        $('#newjersey').addClass('isOnTop');
        $('#newjersey').addClass('z-index-one');
        $('#newjerseyAnimation').addClass('californiaStateAnimation');
        $('#newjerseyElevenAnimation').addClass('elevenToTwelveAnimation');
        $('#newjerseyTwelveAnimation').addClass('twelveToThirteenAnimation');
        $('#newjerseyTwelveDotAnimation').addClass('twelveDotAnimation');
        $('#newjerseyTwelveCaseNumberAnimation').addClass('twelveCasesAnimation');
        $('#newjerseyThirteenDotAnimation').addClass('thirteenDotAnimation');
        $('#newjerseyThirteenCaseNumberAnimation').addClass('thirteenCasesAnimation');
        $('#newStateButton').removeClass('isHidden');
        $('#newStateButton').addClass('z-index-two');
        $('.tickOne').removeClass('isHidden');
        $('.tickTwo').removeClass('isHidden');
        $('.tickThree').removeClass('isHidden');
        $('.tickFour').removeClass('isHidden');
        $('.tickFive').removeClass('isHidden');
        $('.tickSix').removeClass('isHidden');
    });
    
    
    
});










































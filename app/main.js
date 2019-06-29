import formattedTweet from './tweet/formattedTweet';

let app = () => {

    var input = "Obama visited Facebook headquarters: http://bit.ly/xyz @elversatile";

    var processedInformation = [
        {
            startPosition: 14,
            endPosition: 22,
            type: `Entity`
        },
        {
            startPosition: 0,
            endPosition: 5,
            type: `Entity`
        },
        {
            startPosition: 55,
            endPosition: 67,
            type: `Twitter username`
        },
        {
            startPosition: 37,
            endPosition: 54,
            type: `Link`
        }
    ];
    
    console.log(formattedTweet(input, processedInformation));
}
app();
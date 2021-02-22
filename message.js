const messageMaker = {
    randNumGen(randNumList){
        return Math.floor(Math.random() * randNumList.length);
    },
    funnyMessage: ['You have always been a dork', 'Your laughing gas is nasty', 'you are a poor spokes person'],
    inspMessage: ['you can do it', 'don\'t give up', 'try harder when it\'s hard', 'The pain you feel today is the strength you feel tomorrow',
    'I\'m as good once as I ever was.'],
    loveMessage: ['you are loved', 'you are loving', 'nobody loves you'],
    listOfList(){
        let poolList = [this.funnyMessage, this.inspMessage, this.loveMessage]
        let topic = this.randNumGen(poolList)
        let message = this.randNumGen(poolList[topic])
        strTopic = ''
        if(topic === 0){
            strTopic = 'Humorours'
        }
        else if(topic === 1){
            strTopic = 'inspiring message'
        }
        else{
            strTopic = 'message of love'
        }
        return `your ${strTopic} is: ${poolList[topic][message]}`
    }
}
console.log(messageMaker.listOfList())



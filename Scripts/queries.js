function getRoot(request,response){
    response.send('This is from getRoot')
}
function getCoins(request,response){
    response.send('This is from getCoins')
}

module.exports = {
    getRoot,
    getCoins
}
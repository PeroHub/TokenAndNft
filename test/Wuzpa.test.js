// let Wuzpa =  artifacts.require("Wuzpa")

// contract("Wuzpa", (accounts) => {
    
//     before(async () => {
//         Wuzpa = await Wuzpa.deployed()
//     })

//     it("gives the owner of the token 1M tokens", async () => {
//         let balance = await Wuzpa.balanceOf(accounts[0])
//         balance = web3.utils.fromWei(balance, 'ether')
//         assert.equal(balance, '1000000', 'balance is 1000000')
//     })

//     it("can transfer tokens between accounts", async () => {
//         let amount = web3.utils.toWei('1000', 'ether')
//         await Wuzpa.transfer(accounts[1], amount, { from: accounts[0]})

//         let balance = await Wuzpa.balanceOf(accounts[1])
//         balance = web3.utils.fromWei(balance, 'ether')

//         assert.equal(balance, '1000', 'this is 1k values')
//     })
// })
const Token = artifacts.require("Token")
const ERC20 = artifacts.require("ERC20")

const { TestHelper } = require("zos")


contract("Token", function ([_, owner]) {

  it('should create a proxy', async function () {
    const project = await TestHelper({ from: owner })
    const proxy = await project.createProxy(Token);
    const result = await proxy.totalSupply();
    result.toNumber().should.eq(0);
  })
})


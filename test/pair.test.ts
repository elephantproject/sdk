import { ChainId, Token, Pair, TokenAmount, WETH, Price } from '../src'

describe('Pair', () => {
  const USDC = new Token(ChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 18, 'USDC', 'USD Coin')
  const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'DAI Stablecoin')

  const HARMONY_MAINNET_WONE = new Token(
    ChainId.HARMONY_MAINNET,
    '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a',
    18,
    'WONE',
    'Wrapped ONE'
  )
  // const HARMONY_MAINNET_BUSD = new Token(
  //   ChainId.HARMONY_MAINNET,
  //   '0xE176EBE47d621b984a73036B9DA5d834411ef734',
  //   18,
  //   'BUSD',
  //   'Binance USD'
  // )
  // const HARMONY_MAINNET_LINK = new Token(
  //   ChainId.HARMONY_MAINNET,
  //   '0x218532a12a389a4a92fC0C5Fb22901D1c19198aA',
  //   18,
  //   '1LINK',
  //   'ChainLink Token'
  // )
  // const HARMONY_MAINNET_WBTC = new Token(
  //   ChainId.HARMONY_MAINNET,
  //   '0x3095c7557bCb296ccc6e363DE01b760bA031F2d9',
  //   18,
  //   '1WBTC',
  //   'Wrapped BTC'
  // )
  // const HARMONY_MAINNET_VIPER = new Token(
  //   ChainId.HARMONY_MAINNET,
  //   '0xEa589E93Ff18b1a1F1e9BaC7EF3E86Ab62addc79',
  //   18,
  //   'VIPER',
  //   'Viper'
  // )
  const HARMONY_MAINNET_USDC = new Token(
    ChainId.HARMONY_MAINNET,
    '0x985458e523db3d53125813ed68c274899e9dfab4',
    18,
    'USDC',
    'USD Coin'
  )

  const HARMONY_TESTNET_WONE = new Token(
    ChainId.HARMONY_TESTNET,
    '0x7466d7d0C21Fa05F32F5a0Fa27e12bdC06348Ce2',
    18,
    'WONE',
    'Wrapped ONE'
  )
  const HARMONY_TESTNET_BUSD = new Token(
    ChainId.HARMONY_TESTNET,
    '0x0e80905676226159cc3ff62b1876c907c91f7395',
    18,
    'BUSD',
    'Binance USD'
  )
  const HARMONY_TESTNET_VIPER = new Token(
    ChainId.HARMONY_TESTNET,
    '0x69a655c56087d927eb05247fb56495a0f19b9f70',
    18,
    'VIPER',
    'Viper'
  )
  const HARMONY_TESTNET_LINK = new Token(
    ChainId.HARMONY_TESTNET,
    '0x2C6e26B2faD89bc52d043e78E3D980A08af0Ce88',
    18,
    '1LINK',
    'Link'
  )
  const HARMONY_TESTNET_WBTC = new Token(
    ChainId.HARMONY_TESTNET,
    '0x6c4387C4f570Aa8cAdcaFFc5E73ecb3D0F8Fc593',
    18,
    '1WBTC',
    'Wrapped BTC'
  )

  // const HARMONY_TESTNET_1LINK = new Token(ChainId.HARMONY_TESTNET, '0x2C6e26B2faD89bc52d043e78E3D980A08af0Ce88', 18, '1LINK', 'OneChainlink')

  describe('constructor', () => {
    it('cannot be used for tokens on different chains', () => {
      expect(() => new Pair(new TokenAmount(USDC, '100'), new TokenAmount(WETH[ChainId.RINKEBY], '100'))).toThrow(
        'CHAIN_IDS'
      )
    })
  })
  //mainnet
  describe('#getAddress', () => {
    it('returns the correct address for Ethereum Mainnet', () => {
      expect(Pair.getAddress(USDC, DAI)).toEqual('0x96773F77A60E393Da2d11E3409956fA126212648')
    })
  })
  describe('#getAddress', () => {
    it('returns the correct address for Harmony Testnet', () => {
      expect(Pair.getAddress(HARMONY_MAINNET_WONE, HARMONY_MAINNET_USDC)).toEqual(
        '0x135812fE9Df18b70978Eb05958Ff9Dc74a196083'
      )
    })
  })

  // describe('#getAddress', () => {
  //   it('returns the correct address for Harmony Testnet', () => {
  //     expect(Pair.getAddress(HARMONY_MAINNET_LINK, HARMONY_MAINNET_WONE)).toEqual(
  //       '0x9cB4bA2731E8E2b34C41d0c70F0565b11d6Fa817'
  //     )
  //   })
  // })
  //testnet
  describe('#getAddress', () => {
    it('returns the correct address for Harmony Testnet', () => {
      expect(Pair.getAddress(HARMONY_TESTNET_WONE, HARMONY_TESTNET_BUSD)).toEqual(
        '0x841a9208f6eccf03e39aaA7F9B411622311a1789'
      )
    })
  })
  describe('#getAddress', () => {
    it('returns the correct address for Harmony Testnet', () => {
      expect(Pair.getAddress(HARMONY_TESTNET_VIPER, HARMONY_TESTNET_WBTC)).toEqual(
        '0xedE371fEB2bDBe60609Da7Ff7a488DC4ff8F6A98'
      )
    })
  })
  describe('#getAddress', () => {
    it('returns the correct address for Harmony Testnet', () => {
      expect(Pair.getAddress(HARMONY_TESTNET_LINK, HARMONY_TESTNET_WONE)).toEqual(
        '0x196d1E5fDCd5C5ff7Ba2FD672d7CA01D6A67B7Bf'
      )
    })
  })

  describe('#token0', () => {
    it('always is the token that sorts before', () => {
      expect(new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '100')).token0).toEqual(DAI)
      expect(new Pair(new TokenAmount(DAI, '100'), new TokenAmount(USDC, '100')).token0).toEqual(DAI)
    })
  })
  describe('#token1', () => {
    it('always is the token that sorts after', () => {
      expect(new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '100')).token1).toEqual(USDC)
      expect(new Pair(new TokenAmount(DAI, '100'), new TokenAmount(USDC, '100')).token1).toEqual(USDC)
    })
  })
  describe('#reserve0', () => {
    it('always comes from the token that sorts before', () => {
      expect(new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '101')).reserve0).toEqual(
        new TokenAmount(DAI, '101')
      )
      expect(new Pair(new TokenAmount(DAI, '101'), new TokenAmount(USDC, '100')).reserve0).toEqual(
        new TokenAmount(DAI, '101')
      )
    })
  })
  describe('#reserve1', () => {
    it('always comes from the token that sorts after', () => {
      expect(new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '101')).reserve1).toEqual(
        new TokenAmount(USDC, '100')
      )
      expect(new Pair(new TokenAmount(DAI, '101'), new TokenAmount(USDC, '100')).reserve1).toEqual(
        new TokenAmount(USDC, '100')
      )
    })
  })

  describe('#token0Price', () => {
    it('returns price of token0 in terms of token1', () => {
      expect(new Pair(new TokenAmount(USDC, '101'), new TokenAmount(DAI, '100')).token0Price).toEqual(
        new Price(DAI, USDC, '100', '101')
      )
      expect(new Pair(new TokenAmount(DAI, '100'), new TokenAmount(USDC, '101')).token0Price).toEqual(
        new Price(DAI, USDC, '100', '101')
      )
    })
  })

  describe('#token1Price', () => {
    it('returns price of token1 in terms of token0', () => {
      expect(new Pair(new TokenAmount(USDC, '101'), new TokenAmount(DAI, '100')).token1Price).toEqual(
        new Price(USDC, DAI, '101', '100')
      )
      expect(new Pair(new TokenAmount(DAI, '100'), new TokenAmount(USDC, '101')).token1Price).toEqual(
        new Price(USDC, DAI, '101', '100')
      )
    })
  })

  describe('#priceOf', () => {
    const pair = new Pair(new TokenAmount(USDC, '101'), new TokenAmount(DAI, '100'))
    it('returns price of token in terms of other token', () => {
      expect(pair.priceOf(DAI)).toEqual(pair.token0Price)
      expect(pair.priceOf(USDC)).toEqual(pair.token1Price)
    })

    it('throws if invalid token', () => {
      expect(() => pair.priceOf(WETH[ChainId.MAINNET])).toThrow('TOKEN')
    })
  })

  describe('#reserveOf', () => {
    it('returns reserves of the given token', () => {
      expect(new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '101')).reserveOf(USDC)).toEqual(
        new TokenAmount(USDC, '100')
      )
      expect(new Pair(new TokenAmount(DAI, '101'), new TokenAmount(USDC, '100')).reserveOf(USDC)).toEqual(
        new TokenAmount(USDC, '100')
      )
    })

    it('throws if not in the pair', () => {
      expect(() =>
        new Pair(new TokenAmount(DAI, '101'), new TokenAmount(USDC, '100')).reserveOf(WETH[ChainId.MAINNET])
      ).toThrow('TOKEN')
    })
  })

  describe('#chainId', () => {
    it('returns the token0 chainId', () => {
      expect(new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '100')).chainId).toEqual(ChainId.MAINNET)
      expect(new Pair(new TokenAmount(DAI, '100'), new TokenAmount(USDC, '100')).chainId).toEqual(ChainId.MAINNET)
    })
  })
  describe('#involvesToken', () => {
    expect(new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '100')).involvesToken(USDC)).toEqual(true)
    expect(new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '100')).involvesToken(DAI)).toEqual(true)
    expect(
      new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '100')).involvesToken(WETH[ChainId.MAINNET])
    ).toEqual(false)
  })
})

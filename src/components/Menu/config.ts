import { MenuEntry } from '@saltswap/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.saltswap.finance'
  },
  {
    label: 'Exchange',
    href: '/swap',
    icon: "ExchangeIcon"
  },
  {
    label: 'Liquidity',
    href: '/pool',
    icon: 'LiquidityIcon'
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://www.saltswap.finance/farms'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://www.saltswap.finance/pools'
  },
  {
    label: 'Oceans 🆕',
    icon: 'WaveIcon',
    href: 'https://www.saltswap.finance/oceans'
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.saltswap.finance/lottery'
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'SaltSwap',
  //       href: 'https://saltswap.info/token/TODO',
  //     },
  //   ]
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.saltswap.finance',
      // },
      {
        label: "Github",
        href: "https://github.com/saltswap/",
        icon: 'GithubIcon'
      },
      {
        label: "Docs",
        href: "https://saltswap.gitbook.io/salt-swap",
        icon: 'GitbookIcon'
      },
      {
        label: "Blog",
        href: "https://saltswap.medium.com",
        icon: 'MediumIcon'
      },
    ],
  },
]

export default config

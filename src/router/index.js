import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Year1954 from '@/components/pages/Year1954'
import Year1955 from '@/components/pages/Year1955'
import Year1956 from '@/components/pages/Year1956'
import Year1957 from '@/components/pages/Year1957'
import Year1958 from '@/components/pages/Year1958'
import Year1959 from '@/components/pages/Year1959'
import Year1960 from '@/components/pages/Year1960'
import Year1961 from '@/components/pages/Year1961'
import Year1962 from '@/components/pages/Year1962'
import Year1963 from '@/components/pages/Year1963'
import Year1964 from '@/components/pages/Year1964'
import Year1965 from '@/components/pages/Year1965'
import Year1966 from '@/components/pages/Year1966'
import Year1967 from '@/components/pages/Year1967'
import Year1968 from '@/components/pages/Year1968'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/year/1954',
      name: 'year1954',
      component: Year1954
    },
    {
      path: '/year/1955',
      name: 'year1955',
      component: Year1955
    },
    {
      path: '/year/1956',
      name: 'year1956',
      component: Year1956
    },
    {
      path: '/year/1957',
      name: 'year1957',
      component: Year1957
    },
    {
      path: '/year/1958',
      name: 'year1958',
      component: Year1958
    },
    {
      path: '/year/1959',
      name: 'year1959',
      component: Year1959
    },
    {
      path: '/year/1960',
      name: 'year1960',
      component: Year1960
    },
    {
      path: '/year/1961',
      name: 'year1961',
      component: Year1961
    },
    {
      path: '/year/1962',
      name: 'year1962',
      component: Year1962
    },
    {
      path: '/year/1963',
      name: 'year1963',
      component: Year1963
    },
    {
      path: '/year/1964',
      name: 'year1964',
      component: Year1964
    },
    {
      path: '/year/1965',
      name: 'year1965',
      component: Year1965
    },
    {
      path: '/year/1966',
      name: 'year1966',
      component: Year1966
    },
    {
      path: '/year/1967',
      name: 'year1967',
      component: Year1967
    },
    {
      path: '/year/1968',
      name: 'year1968',
      component: Year1968
    },
  ]
})

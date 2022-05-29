import HomeView from '../views/HomeView.vue';
import GameView from '../views/GameView.vue';
import LeaderBoard from '../views/LeaderBoard.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/play',
    name: 'play',
    component: GameView,
  },
  {
    path: '/leaderboard',
    name: 'leaderboard',
    component: LeaderBoard,
  },
];

export default routes;

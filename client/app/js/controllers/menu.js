function MenuCtrl($location, Api) {

  // ViewModel
  const vm = this;

  vm.pages = [{
    name: 'People',
    href: 'people'
  }, {
    name: 'Hosts',
    href: 'hosts'
  }];

  vm.goToPage = (page) => {
    console.log(page);
    $location.path(page.href);
  };

};

MenuCtrl.$inject = ['$location', 'Api'];

export default {
  name: 'MenuCtrl',
  fn: MenuCtrl
};

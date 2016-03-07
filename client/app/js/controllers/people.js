function PeopleCtrl(Api) {

  // ViewModel
  const vm = this;

  console.log(Api);

  let people = Api.people()
  console.log(people);
  people.get(data => {
      console.log(data);
      vm.people = data._embedded.people;
    });

};

PeopleCtrl.$inject = ['Api'];

export default {
  name: 'PeopleCtrl',
  fn: PeopleCtrl
};

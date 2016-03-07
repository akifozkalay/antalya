console.log('api');
function Api($resource) {
  'ngInject';

  const apiUrl = '/api'

  let service = {
    people: () => $resource(`${apiUrl}/people/:id`, {id: '@id'}),
  };

  return service;
}

export default {
  name: 'Api',
  fn: Api
};

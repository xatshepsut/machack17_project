let settingsAPI = {
  update : (data, success, err) => {
    $.ajax({
      url: 'http://localhost:3000/settings',
      method: 'PUT',
      data: data,
      success: success,
      error: err
    });
  },
  get : (data, success, err) => {
    $.ajax({
      url: 'http://localhost:3000/settings',
      method: 'GET',
      data: data,
      success: success,
      error: err
    });
  }
};
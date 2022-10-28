fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    return response.json();
  })
  .then((user) => {
    console.log("data:", user);
    const userInfo = `
          <p><span>id: </span>${user.id}</p>
          <p><span>name: </span>${user.name}</p>
          <p><span>user name: </span>${user.username}</p>
          <p><span>email: </span>${user.email}</p>
          <p><span>phone: </span>${user.phone}</p>
        `;

    const output = document.querySelector(".output-area");

    output.innerHTML = userInfo;
  })

  .catch((error) => {
    console.log("失敗しました");
  });

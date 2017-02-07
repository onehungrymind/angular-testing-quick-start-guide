You'll succeed if you do this.
{: .success }

Here's some useful information.
{: .info }

Something may not happen if you try and do this.
{: .warning }

Something bad will happen if you do this.
{: .error }

right_code: |
  ~~~ javascript
  $.get("http://api.myapp.com/books/", { "token": "YOUR_APP_KEY"}, function(data) {
    alert(data);
  });
  ~~~
  {: title="jQuery" }

  ~~~ bash
  curl http://api.myapp.com/books?token=YOUR_APP_KEY
  ~~~
  {: title="Curl" }
---


| Code | Name        | Description                      |
|------|-------------|----------------------------------|
| 200  | OK          | Success                          |
| 201  | Created     | Creation Successful              |
| 400  | Bad Request | We could not process that action |
| 403  | Forbidden   | We couldn't authenticate you     |

~~~ javascript
$.ajax({
  "url": "http://api.myapp.com/books/3",
  "type": "PUT",
  "data": {
    "token": "YOUR_APP_KEY",
    "score": 5.0,
    "title": "The Book Stealer"
  },
  "success": function(data) {
    alert(data);
  }
});
~~~
{: title="jQuery" }
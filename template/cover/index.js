import request from '@/util/request'
import { convertRESTAPI } from '@/util'

<% _.forEach(data.mocks, function(mock){ %>/** {{mock.description}} */
function {{$$.convertMethod(mock)}}(opts) {
  return request({
    method: '{{mock.method}}',
    url: <% if($$.isREST(mock.url)) {%>convertRESTAPI('{{mock.url}}', opts)<%} else {%> '{{mock.url}}'<% } %>,
    opts: opts
  })
}

<% }) %>export {<% _.forEach(data.mocks, function(mock, i){ %>
  {{$$.convertMethod(mock)}}<% if(data.mocks.length - 1 !== i) { %>,<% } %><% }) %>
}

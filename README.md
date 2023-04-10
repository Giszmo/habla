# habla

A web client to read/write [long form nostr content](https://github.com/nostr-protocol/nips/blob/master/23.md).

Available in https://habla.news.

## Contribute

To run Habla locally for development,

* install node, git, yarn
* clone Habla
* run:
  ```
  yarn install
  yarn start
  ```

This should start a local server and open a browser with the project. You can
now start modifying the code and see the changes in real time.

## Run your own instance

```
yarn install
yarn build
rsync --recursive --delete /path/to/habla/build/ your.server:/your/path/on/server/
```

You will need a domain or subdomain for this as file references in the code
are absolute paths, currently not allowing it to run Habla under
`https://yourserver.com/habla/` for example.

For deep links to articles for example to work, you have to tell your server to
have requests not found be handled by your index.html. In `nginx` that can be
achieved by adding:

```
server {
  ...
  location / {
    autoindex off;
    expires off;
    add_header Cache-Control "public, max-age=0, s-maxage=0, must-revalidate" always;
    try_files $uri /index.html =404;
  }
```

## Configure instance

You can run your instance as your personal blog by limiting the visible authors:

Create a file called `.env.local` with a line defining the allowed authors using
either nprofile or npub. For example a page that only shows two authors could
containt his line:

```
#.env.local file
REACT_APP_authors=npub1gm7tuvr9atc6u7q3gevjfeyfyvmrlul4y67k7u7hcxztz67ceexs078rf6,nprofile1qqsrhuxx8l9ex335q7he0f09aej04zpazpl0ne2cgukyawd24mayt8gpz9mhxue69uhkummnw3ezuamfdejj7qg4waehxw309aex2mrp0yhxgctdw4eju6t09uqkvamnwvaz7tmxd9k8getj9ehx7um5wgh8w6twv5hkuur4vgckwmfhw36hvu3ev96xxdn4xacnxem9we4xveteveuhvmtjd36kcdrexcmkkdm4xa5xx7r6w3arvdmrv4jhsuesxuu8ye3k8a38ymmpv33kzum58468yat9qy08wumn8ghj7mn0wd68yttsw43zuam9d3kx7unyv4ezumn9wshszxnhwden5te0wfjkccte9emk2mrvdaexgetj9ehx2ap0syyv0f
```

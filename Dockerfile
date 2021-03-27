FROM ubuntu:20.04

ARG VERSION=0.9.0

LABEL com.example.vendor="LakeDrops" \
      maintainer="juergen.haas@lakedrops.com" \
      version="${VERSION}" \
      description="An image for running mdshow based on reveal.js."

RUN echo "Adding system components" && \
    apt-get update -y && \
    DEBIAN_FRONTEND=noninteractive \
        apt-get install -y -q \
                autoconf automake curl g++ gcc jq make npm rsync unzip \
                ca-certificates fonts-liberation libappindicator3-1 libasound2 libatk-bridge2.0-0 libatk1.0-0 \
                libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgbm1 libgcc1 libglib2.0-0 \
                libgtk-3-0 libnspr4 libnss3 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 \
                libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 \
                libxss1 libxtst6 lsb-release wget xdg-utils && \
    curl -L -o pandoc.deb https://github.com/jgm/pandoc/releases/download/2.9.2.1/pandoc-2.9.2.1-1-amd64.deb && \
    dpkg -i pandoc.deb && \
    rm pandoc.deb

ADD mdshow /usr/local/bin/
ADD docker-entrypoint.sh /usr/local/bin/

RUN echo "Setup mdshow" && \
    mdshow setup CONFIG_PATH=/opt && \
    ln -s /opt/mdshow/reveal.js/node_modules/gulp/bin/gulp.js /usr/bin/gulp && \
    mkdir -p /opt/mdshow/theme && \
    chmod -R a+rwx /opt/mdshow && \
    chmod -R a+rwx /opt/mdshow/reveal.js/css/theme/source && \
    chmod -R a+rwx /opt/mdshow/reveal.js/dist/theme && \
    \
    echo "Cleanup" && \
    apt-get clean && \
    rm -rf /root/.cache && \
    rm -rf /var/cache/* && \
    rm -rf /var/lib/apt/lists/* && \
    rm -rf /var/log/* && \
    rm -rf /root/.npm && \
    echo "Completed"

WORKDIR /mdshow
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["/bin/bash"]

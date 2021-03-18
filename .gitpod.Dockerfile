FROM gitpod/workspace-full:latest

RUN bash -c ". .nvm/nvm.sh \
    && nvm install 15.11.0 \
    && nvm use 15.11.0 \
    && nvm alias default 15.11.0 \ 
    && npm install npm@7.6.0 -g"

RUN echo "nvm use default &>/dev/null" >> ~/.bashrc.d/51-nvm-fix

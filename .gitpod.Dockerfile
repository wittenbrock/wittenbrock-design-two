FROM gitpod/workspace-full:latest

RUN bash -c ". .nvm/nvm.sh \
    && nvm install 16.1.0 \
    && nvm use 16.1.0 \
    && nvm alias default 16.1.0 \ 
    && npm install npm@7.11.2 -g"

RUN echo "nvm use default &>/dev/null" >> ~/.bashrc.d/51-nvm-fix

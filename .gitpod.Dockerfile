FROM gitpod/workspace-full:latest

RUN bash -c ". .nvm/nvm.sh \
    && nvm install 16.0.0 \
    && nvm use 16.0.0 \
    && nvm alias default 16.0.0 \ 
    && npm install npm@7.10.0 -g"

RUN echo "nvm use default &>/dev/null" >> ~/.bashrc.d/51-nvm-fix

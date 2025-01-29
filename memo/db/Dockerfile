FROM mongo:latest
  
  # 환경 변수 설정 (필요에 따라 수정)
ENV MONGO_INITDB_ROOT_USERNAME=admin
ENV MONGO_INITDB_ROOT_PASSWORD=1234
  
  # 데이터 저장을 위한 볼륨 설정
VOLUME /data/db
  
  # MongoDB 포트 노출
EXPOSE 27017

  # 컨테이너 시작 시 MongoDB 실행
CMD ["mongod"]

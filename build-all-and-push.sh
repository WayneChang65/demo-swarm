# First, change version tag (e.g. 1.0.1,...)
sudo docker buildx build \
    --platform linux/amd64,linux/arm64,linux/arm/v7 \
    -t waynechang65/show-hostname:1.0.3 \
    --push .
sudo docker buildx build \
    --platform linux/amd64,linux/arm64,linux/arm/v7 \
    -t waynechang65/show-hostname:latest \
    --push .

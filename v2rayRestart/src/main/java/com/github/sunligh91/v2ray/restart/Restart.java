package com.github.sunligh91.v2ray.restart;

import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

/**
 * @author ：chr
 * @version ：
 * @description ：
 * @date ：Created in 2020/11/16 21:28
 */
@RestController
public class Restart {

    @RequestMapping("/restart")
    public Boolean restartV2ray() throws IOException {
        Runtime runtime = Runtime.getRuntime();
        runtime.exec("service v2ray restart");
        return true;
    }
}
